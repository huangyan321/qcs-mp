<template>
	<!-- <page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta> -->
	<view class="header-card" @click="toggle">
		<image class="avatar" src="/static/images/head_icon.png" mode="aspectFit"></image>
		<view class="content">
			肖浚鑫
		</view>
		<view class="right-icon">
			<uni-icons type="right" size="22" color="#ffffff"></uni-icons>
		</view>
	</view>
	<!-- 普通弹窗 -->
	<uni-popup ref="popup" border-radius="10px 10px 0 0" background-color="#fff" @change="popupChange">
		<view class="popup-content">
			<view class="header">
				<view class="title">
					<text>切换就诊人</text>
				</view>
				<view class="cancel-btn" @click="cancel">取消</view>
			</view>
			<view class="user-list">
				<button class="user checked">肖浚鑫</button>
				<button class="user">李行法</button>
				<button class="user">赵春光</button>
			</view>
		</view>
	</uni-popup>
</template>
<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared',
			virtualHost: true
		},
	}
</script>
<script lang="ts" setup>
	import { ref } from 'vue'
	defineEmits(['cancel'])
	const show = ref(false)
	const popup = ref()
	// 底部弹框
	function popupChange(e : any) {
		show.value = e.show
	}
	function toggle() {
		popup.value.open('bottom')
	}
	function cancel() {
		popup.value.close()
	}
	function confirm() {
		uni.navigateTo({
			url: '/pages/index/registration/detail/index?query=' + encodeURIComponent(JSON.stringify({ status: '1' }))
		})
	}
	defineExpose({
		toggle
	})
</script>

<style scoped lang="scss">
	.header-card {
		@include flex(flex-start, row);
		background-color: #3DBEDF;
		border-radius: 16rpx;
		margin-bottom: 32rpx;
		position: relative;
		padding: 12px 10px;
		font-weight: normal;

		.content {
			margin-left: 20rpx;
			@include flex(center, column);
			align-items: flex-start;
			flex: 1;
			color: #fff !important;
			font-size: 34rpx !important;
		}

		.right-icon {
			font-size: 14px;
		}
	}
	.avatar {
		width: 72rpx;
		height: 72rpx;
	}

	.header {
		@include flex(flex-start)
	}

	.popup-content {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background-color: #fff;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		text-align: center;

		.header {
			@include flex();
			position: relative;
			padding: 20rpx 0;

			.title {
				flex: 1;
				font-size: 36rpx;

			}

			.cancel-btn {
				position: absolute;
				top: 20rpx;
				right: 0%;
				font-size: 32rpx;
				color: #3DBEDF;
			}
		}

	}

	.user-list {
		padding: 40rpx 0 0;

		.checked {
			background-color: #3DBEDF;
			color: #FFFFFF;
		}
	}

	.user {
		margin-top: 20rpx;
		width: 100%;
		margin: 20rpx 0;
		background-color: #F7F9FA;
		color: #09244B;
		font-size: 32rpx;



		&:active {
			background-color: #3fc7e8;
		}

		&::after {
			border: none;
		}
	}
</style>