<template>
	<view class="head-bar">
		<view class="head-bar-top">
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view class="head-bar-title" :style="{height: menuButtonHeight + 'rpx', marginRight:marginRight + 'rpx'}">
				<text>狄耐克互联网医院</text>
			</view>
		</view>
	</view>
	<!-- 底部垫片 -->
	<view :style="{  height: menuButtonHeight + statusHeight + 'rpx'}"></view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	const statusHeight = ref(40)
	const menuButtonHeight = ref(40)
	const marginRight = ref(0)

	function initStatusBarHeight() {
		const systemInfo = uni.getSystemInfoSync()
		console.log(systemInfo.devicePixelRatio);
		statusHeight.value = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
		/* 如果是小程序的话，进行胶囊处理*/
		// #ifdef MP-WEIXIN
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		menuButtonHeight.value = menuButtonInfo.height * 2
		marginRight.value = menuButtonInfo.width * 2
		statusHeight.value = menuButtonInfo.top * 2
		// #endif
	}
	onLoad(() => {
		initStatusBarHeight()
	})
</script>

<style scoped lang="scss">
	.head-bar {
		padding: 0 30rpx;

		.head-bar-top {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			padding: 0px 30rpx 0;
			box-sizing: border-box;

			.head-bar-title {
				@include flex();
				font-weight: 500;
				font-size: 36rpx;
				color: #09244B;
				text-align: left;
				font-style: normal;
				text-transform: none;
			}

		}
	}
</style>