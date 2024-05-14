<template>
	<view class="chat">
		<view class="chat-body">
			<scroll-view :scroll-into-view="toView" scroll-with-animation :scroll="false" :scroll-y="true"
				class="chat-body-container">
				<view class="chat-body-inner">
					<Guidance></Guidance>
					<view :id="message.id" v-for="(message,index) in messages"
						:class="[isUser(message) ? 'chat-message-user' : 'chat-message']">
						<view class="chat-message-container">
							<view class="chat-message-header">
								<image v-if="!isUser(message)" class="chat-message-avatar"
									src="/static/images/smart-ask/bot.png" mode="aspectFit">
								</image>
							</view>
							<view v-if="(message.preview || message.streaming) &&
					            message.content.length === 0 &&
					            !isUser(message)" class="chat-message-item">
								<image class="loading-icon" src="/static/icons/three-dots.svg" mode="aspectFit"></image>
							</view>
							<view v-else class="chat-message-item">
								<text>{{getMessageTextContent(message)}}</text>
							</view>
							<view class="chat-message-action-date">
								<text>{{ index < context.length ? '预设提示词' : message.date.toLocaleString()}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="chat-input-panel">
			<label class="chat-input-panel-inner" for="chat-input">
				<textarea :value="userInput" class="chat-input" auto-height :maxlength="-1"
					placeholder-class="chat-input-placeholder" placeholder="请输入你要问诊的内容" name="chat-input"
					id="chat-input" cols="30" rows="2" confirm-type="发送" @input="onInput"></textarea>
				<button :class="['send-btn']" :disabled="false" @click="doSubmit(userInput)">
					<image class="send-icon" src="/static/images/smart-ask/send.png" mode="aspectFit"></image>
				</button>
			</label>
		</view>
		<view class="safe-area">

		</view>
	</view>
</template>

<script setup lang="ts">
	import Guidance from './guidance.vue'
	import { ref, computed, nextTick } from 'vue'
	import { useSession, type ChatMessage, createMessage, BOT_HELLO, getMessageTextContent } from './chat';
	type RenderMessage = ChatMessage & { preview ?: boolean }
	const { session, onUserInput } = useSession()
	const userInput = ref()
	const toView = ref()
	function setUserInput(text : string) {
		userInput.value = text
	}
	const isLoading = ref(false)
	const context = ref<RenderMessage[]>([])
	if (
		context.value.length === 0 &&
		session.value.messages.at(0)?.content !== BOT_HELLO.content
	) {
		const copiedHello = Object.assign({}, BOT_HELLO);

		context.value.push(copiedHello);
	}
	const messages = computed(() => {
		return context.value.concat(session.value.messages as RenderMessage[])
	})
	function onInput(e : any) {
		// 可以处理一些提示词命中策略
		const value = e.detail.value
		userInput.value = value
	}
	function doSubmit(userInput : string) {
		// 可以处理一些提示词命中策略
		if (userInput.trim() === "") return;
		// 会话处理
		isLoading.value = true

		onUserInput(userInput).then((botMessage) => {
			isLoading.value = false
		})
		nextTick(() => {
			toView.value = messages.value[messages.value.length - 1].id
			console.log(toView.value);
		})
		setUserInput('')
	}
	function isUser(message : RenderMessage) {
		return message.role === 'user'
	}
	function isShowTyping(message : RenderMessage) {
		return message.preview || message.streaming
	}
</script>
<style lang="scss">
	page {
		height: 100%;
	}

	.chat-input-placeholder {
		font-weight: 400;
		font-size: 30rpx;
		color: #9E9E9E;
	}
</style>
<style scoped lang="scss">
	$safe-bottom: env(safe-area-inset-bottom);

	.chat {
		height: 100%;
		@include flex(flex-start, column);
		box-sizing: border-box;

		.chat-body {
			flex: 1;
			width: 100%;
			box-sizing: border-box;
			position: relative;
		}

		.chat-body-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.chat-body-inner {
			width: 100%;
			box-sizing: border-box;
			padding: 40rpx 32rpx 20rpx;
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

		.chat-input-panel {
			position: relative;
			width: 100%;
			padding-top: 10px;
			box-sizing: border-box;
			flex-direction: column;
			background-color: #ffffff;
			padding: 28rpx 32rpx 20rpx;
		}

		.safe-area {
			background-color: #ffffff;
			width: 100%;
			height: $safe-bottom;
		}

		.chat-input-panel-inner {
			cursor: text;
			display: flex;
			flex: 1 1;
			align-content: start;
			border-radius: 10px;
		}



		.chat-input {
			height: 100%;
			width: 100%;
			border: none;
			background-color: #ffffff;
			font-family: inherit;
			resize: none;
			outline: none;
			box-sizing: border-box;
			min-height: 100rpx;
			padding: 10rpx 20rpx;
			background: #F9F9F9;
			border-radius: 16rpx;
		}

		.disabled {
			background-color: #cdcdcd !important;
		}

		.send-btn {
			@include flex(center);
			white-space: nowrap;
			background-color: #65bbdb;
			color: white;
			border-radius: 100%;
			margin-left: 20rpx;
			width: 88rpx;
			height: 88rpx;
			position: relative;
			padding: 12px;

			&::after {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 100%;
				height: 100%;
				background-color: #000;
				border: inherit;
				border-color: #000;
				border-radius: inherit;
				transform: translate(-50%, -50%);
				opacity: 0;
				content: ' ';
			}

			&:not(.disabled):active::after {
				opacity: 0.1;
			}


		}

		.loading-icon {
			width: 60rpx;
			height: 20rpx;
		}


	}
</style>