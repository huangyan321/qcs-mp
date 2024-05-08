<template>
	<view class="result">
		<view class="result-title">
			<image v-if="isSuccess" class="result-title-icon" src="/static/images/result/success.png" mode="aspectFit">
			</image>
			<image v-else class="result-title-icon" src="/static/images/result/fail.png" mode="aspectFit"></image>
			<view class="result-title-text">
				<text>{{isSuccess ? '签到成功！' : '签到失败！'}}</text>
			</view>
		</view>
		<view class="mark">
			<template v-if="isSuccess">
				<view class="mark-text">请耐心等待医生叫号</view>
			</template>
			<template v-else>
				<view class="mark-text">请重新签到</view>
			</template>
		</view>
		<view class="operate-btn">
			<button class="btn-rediret" v-if="isSuccess" @click="queryQueue">队列查询</button>
			<button class="btn-back-home" plain @click="goHome">返回首页</button>
		</view>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref, computed } from 'vue'

	async function queryQueue() {

	}
	function goHome() {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
	const resultInfo = ref({
		status: '1', // 1： 签到成功 0：签到失败
	})
	const isSuccess = computed(() => {
		return resultInfo.value.status === '0'
	})
	// 加载上个页面传入的数据
	async function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			resultInfo.value = JSON.parse(p);
		} catch (error) {
			resultInfo.value = JSON.parse(p);
		}
	}

	onLoad((event) => {
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		load(event.query);
	})
</script>
<style>

</style>
<style scoped lang="scss">
	.result {
		padding: 80rpx 32rpx 0;
		flex: 1;

		&-title {
			@include flex(center, column);

			&-icon {
				width: 120rpx;
				height: 120rpx;
			}

			&-text {
				font-weight: 500;
				font-size: 40rpx;
				color: #09244B;
				line-height: 47rpx;
				text-align: center;
				font-style: normal;
				text-transform: none;
				margin-top: 20rpx;
			}
		}

		.mark {
			margin-top: 40rpx;

			&-text {
				margin-top: 20rpx;
				font-weight: 400;
				font-size: 30rpx;
				color: #6B7C93;
				line-height: 40rpx;
				text-align: center;
				font-style: normal;
				text-transform: none;
			}
		}

		.operate-btn {
			@include flex(center);
			margin-top: 40rpx;

			button {
				@include flex(center);
				height: 80rpx;
				box-sizing: border-box;
				padding: 0 30rpx;
				flex: 1;
				background: #3DBEDF;
				border-radius: 8rpx;
				color: #FFFFFF;
				font-size: 32rpx;

			}

			.btn-rediret {
				&:active {
					background-color: #36a9c5;
				}
			}

			.btn-back-home {
				background: #FFFFFF;
				margin-left: 10rpx;
				border: 1px solid #3DBEDF;
				color: #3DBEDF;

				&:active {
					background-color: #f7f7f7;
				}
			}
		}
	}
</style>