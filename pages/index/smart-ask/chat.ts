
// 首先要建立一个会话模型，首先这个模型可以维护一段聊天
import { markdownText } from './markdown_text';
import { ref, reactive, onMounted, nextTick, computed } from 'vue'
import { DEFAULT_MODELS, } from './Models'
import { uuid } from '@/utils/uuid';
import uniCoTask from '@/common/unicloud-co-task.js';
// 首先需要角色分别为用户、系统、和llm对象
export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];
export type ModelType = (typeof DEFAULT_MODELS)[number]['name'];
export type RenderMessage = ChatMessage & { preview ?: boolean }
export interface MultimodalContent {
	type : "text" | "image_url";
	text ?: string;
	image_url ?: {
		url : string;
	};
}
// 接着需要一个对话上下文 session
export interface RequestMessage {
	role : MessageRole;
	content : string | MultimodalContent[];
}
export type ChatMessage = RequestMessage & {
	date : string;
	stream ?: boolean;
	isError ?: boolean;
	id : string;
	model ?: ModelType;
};
export interface ChatSession {
	id : string;
	// 讨论的主题
	topic : string;
	// 讨论的内容
	messages : ChatMessage[];
	lastUpdate : number;
	lastSummarizeIndex : number;
	clearContextIndex ?: number;
}
export const BOT_HELLO : ChatMessage = createMessage({
	role: "system",
	content: markdownText,
})
export function getMessageTextContent(message : RequestMessage) {
	console.log(message);
	if (typeof message.content === "string") {
		return message.content;
	}
	for (const c of message.content) {
		if (c.type === "text") {
			return c.text ?? "";
		}
	}
	return "";
}
/**
 * 创建一个新的会话
 * @return 
 */
function createEmptySession() : ChatSession {
	return {
		id: uuid(),
		topic: '新的聊天',
		messages: [],
		lastUpdate: Date.now(),
		lastSummarizeIndex: 0,
	};
}

export function useSession() {
	// 当前对话上下文
	const session = ref<ChatSession>(createEmptySession())
	function updateSession(updater : (session : ChatSession) => void) {
		updater(session.value);
	}

	return {
		session,
		updateSession,
	}
}

export function createMessage(override : Partial<ChatMessage>) : ChatMessage {
	return {
		id: uuid(),
		date: new Date().toLocaleString(),
		role: "user",
		content: "",
		...override,
	};
}

// 聊天逻辑
export function useChat(options : {
	scrollIntoViewId ?: string
}) {
	const { scrollIntoViewId = "last-msg-item" } = options || {}

	const { session, updateSession } = useSession()
	// 聊天上下文，包含系统消息在内
	const context = ref<RenderMessage[]>([])
	if (
		context.value.length === 0 &&
		session.value.messages.at(0)?.content !== BOT_HELLO.content
	) {
		const copiedHello = Object.assign({}, BOT_HELLO);
		context.value.push(copiedHello);
	}
	// 渲染的消息
	const messages = computed(() => context.value.concat(session.value.messages as RenderMessage[]))


	const inputBoxDisabled = ref(false)
	const keyboardHeight = ref(0)
	/**
	 * 处理用户输入
	 * @param {string} content 
	 * @return 
	 */
	async function onUserInput(content : string) {
		if (inputBoxDisabled.value) {
			return uni.showToast({
				title: 'ai正在回复中暂时不能发送',
				icon: 'none'
			});
		}
		// 如果内容为空
		if (!content) {
			// 弹出提示框
			return uni.showToast({
				// 提示内容
				title: '内容不能为空',
				// 不显示图标
				icon: 'none'
			});
		}

		const userContent = content;

		console.log("[User Input] after template: ", userContent);
		// 获取处理后的用户文本
		let mContent : string | MultimodalContent[] = userContent;
		// 创建用户消息
		let userMessage : ChatMessage = reactive(createMessage({
			role: "user",
			content: mContent,
		}));
		// 创建ai消息
		const botMessage : ChatMessage = reactive(createMessage({
			role: "assistant",
		}));
		// 获取当前对话最近的消息
		const recentMessages = session.value.messages;
		// 拼接为即将发送的消息组
		const sendMessages = recentMessages.concat(userMessage);
		// 更新会话
		updateSession((session) => {
			session.messages = session.messages.concat([
				userMessage,
				botMessage
			]);
		})

		const res = await chat(sendMessages, (content) => {
			botMessage.content += content
			// 滚动到最新的消息
			nextTick(() => {
				scrollToLastMsg()
			})
		})
		return botMessage
	}

	// 通讯请求状态
	let requestState = 0; //0发送中 100发送成功 -100发送失败
	// 收集所有执行云对象的任务列表
	let uniCoTaskList = [];
	// 定义终止并清空 云对象的任务列表中所有 任务的方法
	(uniCoTaskList as any).clear = function () {
		// 执行数组内的所有任务
		uniCoTaskList.forEach(task => task.abort())
		// 清空数组
		uniCoTaskList.slice(0, uniCoTaskList.length)
	}

	let afterChatCompletion = {} as { clear : () => void }
	// 是否启用流式
	let enableStream = true
	let sseChannel : any = false
	// 此(惰性)函数，检查是否开通uni-push;决定是否启用enableStream
	let checkIsOpenPush = async function () {
		try {
			// 获取推送客户端id
			await uni.getPushClientId()
			// 如果获取成功，则将checkIsOpenPush函数重写为一个空函数
			console.log('uni-push 认证通过');
			checkIsOpenPush = () => Promise.resolve()
		} catch (err) {
			console.log(err);
			// 如果获取失败，则将enableStream设置为false
			enableStream = false
		}
	}
	/**
	 * 调用大模型接口，处理聊天消息
	 * @return 
	 */
	async function chat(messages : RenderMessage[], callback ?: (content : string) => void) : Promise<any> {
		requestState = 0
		// 清除旧的afterChatCompletion（如果存在）
		if (afterChatCompletion && afterChatCompletion.clear) afterChatCompletion.clear()
		// 在控制台输出 向ai机器人发送的完整消息内容
		console.log('send to ai messages:', messages);

		// 检查是否开通uni-push;决定是否启用enableStream
		await checkIsOpenPush()
		// 流式响应和云对象的请求结束回调函数
		let sseEnd, requestEnd;

		if (enableStream) {
			sseChannel = new uniCloud.SSEChannel()
			// console.log('sseChannel', sseChannel);
			// 监听message事件
			sseChannel.on('message', (message) => {
				// console.log('on message', message);
				// 将从云端接收到的消息添加到消息列表中
				callback?.(message)
			})
			sseChannel.on('end', (e) => {
				console.log('sse 结束', e)
			})
			await sseChannel.open(); // 等待通道开启
		}


		// 导入uni-ai-chat模块，并设置customUI为true

		let task = uniCoTask({
			coName: "ai-chat",
			funName: "send",
			param: [{
				messages, // 消息列表
				sseChannel, // 消息通道
				llmModel: 'ERNIE-Bot-turbo',

			}],
			config: {
				customUI: true
			},
			success: res => {
				// 更新 通讯状态为100（发送成功）
				requestState = 100

				// console.log("success",res);
				if (!res.data) return

				console.log(res.data);
			},
			complete: e => {
				if (enableStream) {
					requestEnd()
				}
				// console.log('complete:',e);
				// 滚动窗口以显示最新的一条消息
				nextTick(() => {
					scrollToLastMsg()
				})
			},
			fail: e => {
				console.error(e);
				// 更新 通讯状态为-100（发送失败）
				requestState = -100
				// 弹框提示用户错误原因
				uni.showModal({
					content: JSON.stringify(e.message),
					showCancel: false
				});
				// 如果启用流式，云函数出错了，sse 也应当被终止
				if (enableStream) {
					sseEnd()
				}
			}

		})
		uniCoTaskList.push(task)
		// 调用接口
		console.log('聊天开始');
		return new Promise(r => {
			r('你好')
		})
	}

	// 用于滚动
	const scrollIntoView = ref('')
	function scrollToLastMsg() {
		nextTick(() => {
			scrollIntoView.value = scrollIntoViewId
			// 等待DOM更新，即：滚动完成
			nextTick(() => {
				// 将scrollIntoView属性设置为空，以便下次设置滚动条位置可被监听
				scrollIntoView.value = ""
			})
		})
	}
	onMounted(() => {
		const messages = session.value.messages
		// 如果上一次对话中 最后一条消息ai未回复。则一启动就自动重发。
		let len = messages.length
		let lastMsg = messages[len - 1]
		if (lastMsg && lastMsg.role === 'user') {
			chat(messages)
		}
		// 在dom渲染完毕后 使聊天窗口滚动到最后一条消息
		nextTick(() => {
			scrollToLastMsg()
		})

		// #ifndef H5
		uni.onKeyboardHeightChange(e => {
			this.keyboardHeight = e.height
			// 在dom渲染完毕后 使聊天窗口滚动到最后一条消息
			nextTick(() => {
				scrollToLastMsg()
			})
		})
		// #endif
	})
	return {
		scrollIntoView,
		onUserInput,
		messages,
		inputBoxDisabled
	}
}