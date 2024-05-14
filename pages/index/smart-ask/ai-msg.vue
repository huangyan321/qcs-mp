<script lang="ts">
	// 引入markdown-it库
	import MarkdownIt from '@/lib/markdown-it.min.js';

	// hljs是由 Highlight.js 经兼容性修改后的文件，请勿直接升级。否则会造成uni-app-vue3-Android下有兼容问题
	import hljs from "@/lib/highlight/highlight-uni.min.js";

	// 引入html-parser.js库
	import parseHtml from '@/lib/html-parser.js';

	// 为复制代码功能保留代码内容
	let codeDataList = []

	// 初始化 MarkdownIt库
	const markdownIt = MarkdownIt({
		// 在源码中启用 HTML 标签
		html: true,
		// 如果结果以 <pre ... 开头，内部包装器则会跳过。
		highlight: function (str : string, lang : string) {
			// if (lang && hljs.getLanguage(lang)) {
			// 	console.error('lang', lang)
			// 	try {
			// 		return '<pre class="hljs" style="padding: 5px 8px;margin: 5px 0;overflow: auto;display: block;"><code>' +
			// 			hljs.highlight('lang', str, true).value +
			// 			'</code></pre>';
			// 	} catch (__) {}
			// }
			// 经过highlight.js处理后的html
			let preCode = ""
			try {
				// @ts-ignore
				preCode = hljs.highlightAuto(str).value
			} catch (err) {
				// console.log('err',err);
				preCode = markdownIt.utils.escapeHtml(str);
			}


			// 以换行进行分割
			const lines = preCode.split(/\n/).slice(0, -1)
			// 添加自定义行号
			let html = lines.map((item, index) => {
				// 去掉空行
				if (item == '') {
					return ''
				}
				return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
			}).join('')
			html = '<ol style="padding: 0px 30px;">' + html + '</ol>'

			// 代码复制功能
			codeDataList.push(str)
			let htmlCode = `<div style="background:#0d1117;margin-top: 5px;color: #888;padding:5px 0;border-radius: 5px;">`
			// #ifndef MP-WEIXIN
			htmlCode += `<div style="text-align: end;font-size: 12px;">`
			htmlCode += `${lang}<a class="copy-btn" code-data-index="${codeDataList.length - 1}" style="cursor: pointer;"> 复制代码 </a>`
			htmlCode += `</div>`
			// #endif
			htmlCode += `<pre class="hljs" style="padding:0 8px;margin-bottom:5px;overflow: auto;display: block;border-radius: 5px;"><code>${html}</code></pre>`;
			htmlCode += '</div>'
			return htmlCode
		}
	})


	import { type Prop, defineComponent, computed } from 'vue';
	import { type RenderMessage, getMessageTextContent } from './chat'
	export default defineComponent({
		props: {
			actionDate: String,
			message: Object as Prop<RenderMessage>,
			id: String,
			// 是否显示鼠标闪烁的效果
			showCursor: {
				type: [Boolean, Number],
				default() {
					return false
				}
			},
			isLastMsg: {
				type: Boolean,
				default() {
					return false
				}
			},
		},
		setup(props) {
			const msgContent = computed(() => getMessageTextContent(props.message))
			const nodes = computed(() => {
				if (!msgContent.value) {
					return //处理特殊情况，比如网络异常导致的响应的 content 的值为空
				}
				let htmlString = ''
				// 修改转换结果的htmlString值 用于正确给界面增加鼠标闪烁的效果
				// 判断markdown中代码块标识符的数量是否为偶数
				if (msgContent.value.split("```").length % 2) {
					let _msgContent = msgContent.value
					if (msgContent[msgContent.value.length - 1] != '\n') {
						_msgContent += '\n'
					}
					_msgContent += ' <span class="cursor">|</span>'
					htmlString = markdownIt.render(_msgContent);
				} else {
					htmlString = markdownIt.render(msgContent.value) + ' \n <span class="cursor">|</span>';
				}

				// #ifndef APP-NVUE
				return htmlString
				// #endif

				// nvue模式下将htmlString转成htmlArray，其他情况rich-text内部转
				// 注：本示例项目还没使用nvue编译

				// #ifdef APP-NVUE
				return parseHtml(htmlString)
				// #endif
			})
			function isUser(message : RenderMessage) {
				return message.role === 'user'
			}
			function isShowTyping(message : RenderMessage) {
				return message.preview || message.streaming
			}
			return {
				isUser,
				isShowTyping,
				getMessageTextContent,
				nodes,
				msgContent
			}
		}
	})
</script>

<template>
	<view :id="id" class="msg-item">
		<view :class="[isUser(message) ? 'chat-message-user' : 'chat-message']">
			<view class="chat-message-container">
				<view class="chat-message-header">
					<image v-if="!isUser(message)" class="chat-message-avatar" src="/static/images/smart-ask/bot.png"
						mode="aspectFit">
					</image>
				</view>
				<view v-if="(message.preview || message.streaming) &&
				            message.content.length === 0 &&
				            !isUser(message)" class="chat-message-item">
					<image class="loading-icon" src="/static/icons/three-dots.svg" mode="aspectFit"></image>
				</view>
				<view v-else class="chat-message-item">
					<view v-if="!isUser(message)" class="rich-text-box" :class="{'show-cursor':showCursor}"
						ref="rich-text-box">
						<rich-text v-if="nodes && nodes.length" space="nbsp" :nodes="nodes"></rich-text>
					</view>
					<view v-else>{{msgContent}}</view>
				</view>
				<view class="chat-message-action-date">
					<text>{{ actionDate }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss">
	/* #ifdef VUE3 */
	@import "./ai-msg.scss";
	/* #endif */

	.msg-item {
		position: relative;
		width: 100%;
		flex-direction: column;
	}

	.chat-message {
		@include flex();
	}

	.chat-message-container {
		max-width: 100%;
		@include flex(center, column);
		align-items: flex-start;
	}

	.chat-message-header {
		margin-top: 20rpx;
		@include flex(flex-start);

		.chat-message-avatar {
			width: 84rpx;
			height: 84rpx;
		}
	}

	.chat-message-item {
		box-sizing: border-box;
		max-width: 100%;
		margin-top: 10px;
		border-radius: 10px;
		background-color: #ffffff;
		padding: 10px;
		font-size: 14px;
		user-select: text;
		word-break: break-word;
		// border: 2rpx solid rgb(222, 222, 222);
		position: relative;
		transition: all ease 0.3s;
	}

	.chat-message-action-date {
		font-size: 12px;
		opacity: 0.2;
		white-space: nowrap;
		transition: all ease 0.6s;
		color: rgb(48, 48, 48);
		text-align: right;
		width: 100%;
		box-sizing: border-box;
		padding-right: 10px;
		pointer-events: none;
		z-index: 1;
	}

	.chat-message-user {
		display: flex;
		flex-direction: row-reverse;

		.chat-message-container {
			align-items: flex-end;
		}

		.chat-message-header {
			flex-direction: row-reverse;
		}

		.chat-message-item {
			background-color: #3DBEDF;
			color: #FFFFFF;
		}
	}

	.loading-icon {
		width: 60rpx;
		height: 20rpx;
	}
</style>