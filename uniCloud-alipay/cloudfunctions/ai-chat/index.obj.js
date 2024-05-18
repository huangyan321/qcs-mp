// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
// 引入utils模块中的safeRequire和checkContentSecurityEnable函数
const {
	safeRequire,
	checkContentSecurityEnable
} = require('./utils')
// 引入uni-config-center模块，并创建config对象
const createConfig = safeRequire('uni-config-center')
const config = createConfig({
	pluginId: 'ai-chat'
}).config()
// 引入uniCloud.database()方法，并创建db对象
const db = uniCloud.database();
// 创建userscollection对象
const userscollection = db.collection('uni-id-users')
// 引入uni-id-common模块
const uniIdCommon = require('uni-id-common')


module.exports = {
	_before: async function() {
		// 这里是云函数的前置方法，你可以在这里加入你需要逻辑

		// 判断否调用量本云对象的send方法
		if (this.getMethodName() == 'send') {

		}
	},
	async _after(error, result) {
		// 打印错误和结果
		// console.log('_after',{error,result}); 
		// 如果有错误
		if (error) {
			if (error.errCode && error.errMsg) {
				return error
			}
		}

		// 返回处理后的结果
		return result
	},
	// 发送消息
	async send({
		// 消息内容
		messages,
		// sse渠道对象
		sseChannel,
		// 语言模型
		llmModel
	}) {
		// 初次调试时，可不从客户端获取数据，直接使用下面写死在云函数里的数据
		// messages =  [{
		// 	role: 'user',
		// 	content: 'uni-app是什么，20个字以内进行说明'
		// }]

		// 校验客户端提交的消息参数是否符合规范
		let res = checkMessages(messages)
		if (res.errCode) {
			throw new Error(res.errMsg)
		}

		// 向uni-ai发送消息
		let promiseTaskList = []
		let promiseTask = new Promise((resolve, reject) => {
			chatCompletion(messages)
				.then((res) => {
					console.log(' 获取到问题的回答，res.reply：', res.reply); //非sse 时才有值，sse 时消息直接发往客户端了
					resolve({
						type: "reply",
						data: res.reply
					});
				})
				.catch((error) => {
					reject(error)
				})
		});
		promiseTaskList.push(promiseTask)

		// 拿到最后一次对话的消息内容（去掉最后一次，还没得到答案的提问）
		let lastTimeMessages = messages.slice(0, -1)
		// 判断是否需要总结 (根据消息总长度是否大于800)
		if (lastTimeMessages.map(i => i.content).join('').length > 800) {
			// 获取总结
			lastTimeMessages.push({
				"content": "请简要总结上述全部对话",
				"role": "user"
			})
			let promiseTask = new Promise((resolve, reject) => {
				chatCompletion(lastTimeMessages, false).then((res) => {
						console.log('获取到总结，res：', res);
						resolve({
							type: "summarize",
							data: res.reply
						});
					})
					.catch((error) => {
						reject(error)
					})
			});
			promiseTaskList.push(promiseTask)
		}


		let promiseAllRes = await Promise.all(promiseTaskList)
		// console.log('Promise.all promiseRes',promiseAllRes);
		res = {
			data: {},
			errCode: 0
		}
		promiseAllRes.forEach(item => {
			switch (item.type) {
				case 'summarize':
					res.data.summarize = item.data
					break;
				case 'reply':
					res.data.reply = item.data
					break;
				default:
					break;
			}
		})
		return res


		// chatCompletion函数：对话完成
		/**
		 * 校验消息内容是否符合规范
		 * @param {Array} messages - 消息列表
		 * @param {Boolean} stream - 是否启用流式响应
		 * @returns {Promise} - 返回结果
		 */
		function chatCompletion(messages, stream = true) {
			// 从uni-config-center config获取 调用chatCompletion函数，传入messages、sseChannel、llm参数
			let {
				llm,
				chatCompletionOptions
			} = config
			// 如果客户端传了llmModel 就覆盖配置的model
			if (llmModel) {
				if (llmModel.includes('gpt-') && (llm && !["azure", "openai"].includes(llm.provider))) {
					throw new Error('错误：LLM的provider不是openai或azure，但model却选了' + llmModel +
						'；请参考文档：https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion 中model参数的说明'
					)
				}
				chatCompletionOptions.model = llmModel
			}

			console.log({
				...chatCompletionOptions,
				messages,
				stream: stream && sseChannel !== false,
				sseChannel,
				streamEventForSSE: "optimizedMessage"
			});
			// 获取语言模型管理器
			const llmManager = uniCloud.ai.getLLMManager(llm)
			// 调用chatCompletion方法，传入参数
			// console.log('______messages',messages);
			return llmManager.chatCompletion({
				...chatCompletionOptions,
				messages,
				stream: stream && sseChannel !== false,
				sseChannel,
				streamEventForSSE: "optimizedMessage"
			})
		}

		/**
		 * 校验消息内容是否符合规范
		 * @param {Array} messages - 消息列表
		 * @returns {Object} - 返回校验结果
		 */
		function checkMessages(messages) {
			try {
				// 如果messages未定义
				if (messages === undefined) {
					// 抛出异常
					throw "messages为必传参数"
					// 如果messages不是数组
				} else if (!Array.isArray(messages)) {
					// 抛出异常
					throw "参数messages的值类型必须是[object,object...]"
				} else {
					// 否则 遍历messages
					messages.forEach(item => {
						// 如果item不是对象
						if (typeof item != 'object') {
							// 抛出异常
							throw "参数messages的值类型必须是[object,object...]"
						}
						// 定义itemRoleArr数组
						let itemRoleArr = ["assistant", "user", "system"]
						// 如果item的role属性不在itemRoleArr数组中
						if (!itemRoleArr.includes(item.role)) {
							// 抛出异常
							throw "参数messages[{role}]的值只能是：" + itemRoleArr.join('或')
						}
						// 如果item的content属性不是字符串
						if (typeof item.content != 'string') {
							// 抛出异常
							throw "参数messages[{content}]的值类型必须是字符串"
						}
					})
				}
				// 返回校验结果
				return {
					errCode: 0,
				}
				// 捕获异常
			} catch (errMsg) {
				// 返回异常信息
				return {
					errSubject: 'ai-demo',
					errCode: 'param-error',
					errMsg
				}
			}
		}
	}
}