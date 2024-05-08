<template>
	<view class="report">
		<SwitchUser></SwitchUser>
		<view v-for="i in [1,2]" :key="i" class="report-item">
			<uni-section title="报告单号" type="line">
				<template v-slot:right>
					<text>0000837477522</text>
				</template>
				<uni-list>
					<uni-list-item title="项目" rightText="xxxx" />
					<uni-list-item title="流水号" rightText="092934" />
					<uni-list-item title="科室" rightText="心外科" />
					<uni-list-item title="医生" rightText="刘医生" />
					<uni-list-item title="申请时间" rightText="2024-02-11 15:03:22" />
					<uni-list-item title="报告时间" rightText="2024-02-11 15:03:22" />
					<uni-list-item>
						<template v-slot:body>
							<button class="confirm-btn" @click="goDetail">查看明细</button>
						</template>
					</uni-list-item>
				</uni-list>
			</uni-section>
		</view>

	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'

	function goDetail() {
		uni.navigateTo({
			url: '/pages/index/report/detail'
		})
	}
</script>

<style scoped lang="scss">
	.report {
		box-sizing: border-box;
		padding: 32rpx;
		width: 100%;

		&-item {
			margin-bottom: 40rpx;
		}

		.confirm-btn {
			margin-top: 20rpx;
			@include flex(center);
			height: 80rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			flex: 1;
			background-color: #3DBEDF;
			color: #ffffff;
			border-radius: 8rpx;
			font-size: 32rpx;
		}

		.count {
			margin-left: 0.5em;
			color: #FF3A2E;
		}
	}
</style>