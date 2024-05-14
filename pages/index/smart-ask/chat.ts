
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
	streaming ?: boolean;
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
		}));

		const botMessage : ChatMessage = reactive(createMessage({
			role: "assistant",
			streaming: true,
			model: "gpt-3.5-turbo",
		}));

		const recentMessages = session.value.messages;
		const sendMessages = recentMessages.concat(userMessage);
		updateSession((session) => {
			userMessage.content = mContent;
			session.messages = session.messages.concat([
				userMessage,
				botMessage,
			]);
		})
		console.log(session.value.messages);
		function delay() : Promise<string> {
			return new Promise(r => {
				setTimeout(() => {
					r(markdownText)
				}, 2000)
			})
		}
		const res = await delay()
		botMessage.content = res
		return botMessage
	}
	return {
		session,
		updateSession,
		onUserInput
	}
}