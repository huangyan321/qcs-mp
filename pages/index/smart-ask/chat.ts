
// 首先要建立一个会话模型，首先这个模型可以维护一段聊天
import { markdownText } from './markdown_text';
import { ref, reactive } from 'vue'
import { DEFAULT_MODELS, } from './Models'
import { uuid } from '@/utils/uuid';
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
	role: "assistant",
	content: markdownText,
})
export function getMessageTextContent(message : RequestMessage) {
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

export function createMessage(override : Partial<ChatMessage>) : ChatMessage {
	return {
		id: uuid(),
		date: new Date().toLocaleString(),
		role: "user",
		content: "",
		...override,
	};
}
const AK = import.meta.env.VITE_AK
const SK = import.meta.env.VITE_SK
console.log(AK);
console.log(SK);
let access_token = ''
getAccessToken()
/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
async function getAccessToken() {

	const res = await uni.request({
		url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK
	})
	access_token = (res.data as any).access_token
}
export function useSession() {
	// 当前对话上下文
	const session = ref<ChatSession>(createEmptySession())
	function updateSession(updater : (session : ChatSession) => void) {
		updater(session.value);
	}
	async function onUserInput(content : string) {
		const userContent = content;

		console.log("[User Input] after template: ", userContent);
		let mContent : string | MultimodalContent[] = userContent;
		let userMessage : ChatMessage = reactive(createMessage({
			role: "user",
			content: mContent,
			stream: true
		}));

		const botMessage : ChatMessage = reactive(createMessage({
			role: "assistant",
			stream: true,
			model: "gpt-3.5-turbo",
		}));

		const recentMessages = session.value.messages;
		const sendMessages = recentMessages.concat(userMessage);
		updateSession((session) => {
			userMessage.content = mContent;
			session.messages = session.messages.concat([
				userMessage,
				botMessage
			]);
		})
		async function chat() : Promise<any> {
			const msg = session.value.messages.slice(0, session.value.messages.length - 1)
			const res = await uni.request({
				url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=' + access_token,
				method: 'POST',
				header: {
					'Content-Type': 'application/json'
				},

				data: {
					messages: msg,
					"temperature": 0.95,
					"top_p": 0.8,
					"penalty_score": 1,
					"disable_search": false,
					"enable_citation": false
				}
			})
			console.log(res.data);
			return res.data.result
		}

		const res = await chat()
		botMessage.content = res
		return botMessage
	}
	return {
		session,
		updateSession,
		onUserInput
	}
}