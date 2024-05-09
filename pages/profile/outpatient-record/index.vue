<template>
	<view class="check-in">
		<SwitchUser></SwitchUser>
		<view class="appoint-item">
			<uni-section title="2024-02-11 上午" type="line">
				<uni-list>
					<uni-list-item title="科室" rightText="普通内科" />
					<uni-list-item title="医生" rightText="刘医生" />
					<uni-list-item title="号序" rightText="第29号" />
				</uni-list>
			</uni-section>
		</view>
		<view class="appoint-item">
			<uni-section title="2024-02-11 上午" type="line">
				<uni-list>
					<uni-list-item title="科室" rightText="普通内科" />
					<uni-list-item title="医生" rightText="刘医生" />
					<uni-list-item title="号序" rightText="第29号" />
				</uni-list>
			</uni-section>
		</view>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'

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
	.check-in {
		padding: 20rpx 32rpx;



		.appoint-item {
			margin-bottom: 20rpx;

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

				&:active:not(.disabled) {
					background-color: #36a9c5;
				}
			}

			.disabled {
				background-color: #eef9fc;
				color: #3DBEDF;
			}
		}


	}
</style>