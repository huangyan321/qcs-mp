<template>
	<view class="chat">
		<scroll-view :scroll-into-view="scrollIntoView" scroll-with-animation :scroll="false" :scroll-y="true"
			class="chat-body">
			<view class="chat-body-inner">
				<Guidance></Guidance>
				<AIMsg :id="message.id" v-for="(message,index) in messages" :key="message.id" :message="message"
					:action-date="message.role === 'system' ? '预设提示词' : message.date.toLocaleString()" show-cursor />
			</view>
			<view id="last-msg-item" style="height: 1px;"></view>
		</scroll-view>
		<view class="chat-input-panel">
			<label class="chat-input-panel-inner" for="chat-input">
				<textarea :value="userInput" class="chat-input" :cursor-spacing="15" :disable-default-padding="false"
					auto-height :maxlength="-1" placeholder-class="chat-input-placeholder" placeholder="请输入你要问诊的内容"
					name="chat-input" id="chat-input" cols="30" rows="2" confirm-type="发送" @input="onInput"></textarea>
				<button :class="['send-btn']" :disabled="false" @click="doSubmit(userInput)">
					<image class="send-icon" src="/static/images/smart-ask/send.png" mode="aspectFit"></image>
				</button>
			</label>
		</view>
		<view class="safe-area" />
	</view>
</template>

<script setup lang="ts">
	import Guidance from './guidance.vue'
	import { ref, } from 'vue'
	import { useChat, } from './chat';
	import AIMsg from './ai-msg'
	const { messages, onUserInput, scrollIntoView } = useChat({})
	// 输入框的消息内容
	const userInput = ref('')
	function setUserInput(text : string) {
		userInput.value = text
	}
	function onInput(e : any) {
		// 可以处理一些提示词命中策略
		const value = e.detail.value
		userInput.value = value
	}
	function doSubmit(userInput : string) {
		// 可以处理一些提示词命中策略
		if (userInput.trim() === "") return;

		onUserInput(userInput).then(() => {
		})
		setUserInput('')
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
			height: 0; //不可省略，先设置为0 再由flex: 1;撑开才是一个滚动容器
			flex: 1;
			width: 100%;
			box-sizing: border-box;
			position: relative;
		}

		.chat-body-inner {
			width: 100%;
			box-sizing: border-box;
			padding: 40rpx 32rpx 20rpx;
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