<template>
	<view class="detail">
		<view class="header-card" @click="gotoPatientInfo">
			<image class="avatar" src="/static/images/head_icon.png" mode="aspectFit"></image>
			<view class="content">
				肖浚鑫
			</view>
			<view class="right-icon">
				<uni-icons type="right" size="22" color="#ffffff"></uni-icons>
			</view>

		</view>
		<uni-section title="预约信息" type="line">
			<uni-list>
				<uni-list-item title="科室" rightText="普通内科" />
				<uni-list-item title="医生" rightText="刘医生" />
				<uni-list-item title="就诊日期" rightText="2024-02-11 上午" />
			</uni-list>
		</uni-section>
		<button class="confirm-btn" @click="confirm">立即预约</button>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	function gotoPatientInfo() { }
	function confirm() {
		uni.reLaunch({
			url: '/pages/index/registration/result/index?query=' + encodeURIComponent(JSON.stringify({ status: '1' }))
		})
	}

	const detailInfo = ref()
	// 加载上个页面传入的数据
	async function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			detailInfo.value = JSON.parse(p);
		} catch (error) {
			detailInfo.value = JSON.parse(p);
		}
		uni.showToast({
			icon: 'loading',
			title: '获取中...',
			mask: true
		})
		await uni.setNavigationBarTitle({
			title: detailInfo.value.name
		});

		uni.hideToast()
	}

	onLoad((event) => {
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		load(event.query);
	})
</script>

<style scoped lang="scss">
	.detail {
		padding: 20rpx 32rpx;

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

		.header {
			@include flex(flex-start)
		}

		.avatar {
			width: 72rpx;
			height: 72rpx;
		}

		.confirm-btn {
			margin-top: 40rpx;
			@include flex(center);
			height: 80rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			flex: 1;
			background: #3DBEDF;
			border-radius: 8rpx;
			color: #FFFFFF;
			font-size: 32rpx;

			&:active {
				background-color: #36a9c5;
			}
		}

	}
</style>