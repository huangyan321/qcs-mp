<template>
	<view class="result">
		<view class="result-title">
			<image v-if="isSuccess" class="result-title-icon" src="/static/images/result/success.png" mode="aspectFit">
			</image>
			<image v-else class="result-title-icon" src="/static/images/result/fail.png" mode="aspectFit"></image>
			<view class="result-title-text">
				<text>{{isSuccess ? '预约成功' : '取消预约成功'}}</text>
			</view>
		</view>
		<view class="mark">
			<template v-if="isSuccess">
				<view class="mark-text">1、请在就诊当日携带有效证件前往科室就诊。</view>
				<view class="mark-text">2、您可以在就诊当日通过小程序进行取号、签到、查看候诊队列。</view>
			</template>
			<template v-else>
				<view class="mark-text">预约已取消，你可以返回首页重新预约。</view>
			</template>
		</view>
		<view class="info-list">
			<uni-list v-for="(sublist , index) in ucenterList" :key="index">
				<uni-list-item v-for="(item,i) in sublist" :title="item.title" :key="i" :clickable="true" :to="item.to"
					:show-extra-icon="false">
					<template v-slot:footer>
						<view class="item-footer">
							<text class="item-footer-text">{{item.rightText}}</text>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="operate-btn">
			<button class="btn-cancel" v-if="isSuccess" @click="cancel">取消预约</button>
			<button class="btn-back-home" plain @click="goHome">返回首页</button>
		</view>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref, computed } from 'vue'
	const ucenterList = [
		[
			{
				"title": '就诊人',
				rightText: '肖浚鑫'
			},
			{
				"title": '科室',
				rightText: '普通内科'
			},
			{
				"title": '医生',
				rightText: '刘医生'
			},
			{
				"title": '科室位置',
				rightText: '门诊1号楼三楼'
			},
			{
				"title": '就诊日期',
				rightText: '2023-02-11'
			},
			{
				"title": '提交时间',
				rightText: '2024-02-11 15:09:33'
			}
		],
	]



	async function cancel() {
		const res = await uni.showModal({
			title: '提示',
			content: '确定取消预约？',
		})
		if (res.confirm) {
			uni.redirectTo({
				url: '/pages/index/registration/result/index?query=' + encodeURIComponent(JSON.stringify({ status: '0' }))
			})
		}
	}
	function goHome() {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
	const resultInfo = ref({
		status: '1', // 1： 预约成功 0： 预约失败
	})
	const isSuccess = computed(() => {
		return resultInfo.value.status === '1'
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
				text-align: left;
				font-style: normal;
				text-transform: none;
			}
		}

		.info-list {
			border-radius: 16rpx;
			overflow: hidden;
			margin-top: 40rpx;
		}

		.operate-btn {
			@include flex(center);
			margin-top: 40rpx;

			button {
				@include flex(center);
				height: 72rpx;
				box-sizing: border-box;
				padding: 0 30rpx;
				flex: 1;
				background: #3DBEDF;
				border-radius: 8rpx;
				color: #FFFFFF;
				font-size: 32rpx;

			}

			.btn-cancel {
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