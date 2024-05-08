<template>
	<view class="queue">
		<SwitchUser></SwitchUser>
		<view class="queue-item" v-for="i in 5">
			<uni-section title="序号" type="line">
				<template v-slot:right>
					<text>23244</text>
				</template>
				<uni-list>
					<uni-list-item title="科室" rightText="普通内科" />
					<uni-list-item title="医生" rightText="刘医生" />
					<uni-list-item>
						<template v-slot:body>
							<view class="confirm-btn"><text> 前方等待 </text><text class="count"> 12 人
								</text></view>
						</template>
					</uni-list-item>
				</uni-list>
			</uni-section>
		</view>

	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
</script>

<style scoped lang="scss">
	.queue {
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
			background-color: #eef9fc;
			color: #09244B;
			border-radius: 8rpx;
			font-size: 32rpx;
		}

		.count {
			margin-left: 0.5em;
			color: #FF3A2E;
		}
	}
</style>