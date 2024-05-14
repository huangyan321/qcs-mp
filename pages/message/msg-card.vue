<template>
	<view class="outpatient">
		<view class="outpatient-date">
			<text> {{data.date}} </text>
		</view>
		<uni-card class="card" :is-shadow="false">
			<template v-slot:title>
				<view class="card-header">
					<view class="card-header-box">
						<view class="card-header-content">
							<view :style="{color: data.type === 'success' ? '#33D853' : '#FF5656'}"
								class="card-header-content--title uni-ellipsis">
								<image style="width: 30rpx;height: 30rpx;" v-if="data.type === 'success'"
									src="/static/images/message/success_mini.png" mode="aspectFit"></image>
								<image style="width: 30rpx;height: 30rpx;" v-else
									src="/static/images/message/error_mini.png" mode="aspectFit"></image>
								<text style="margin-left: 10rpx;">{{data.title}}</text>
							</view>
						</view>
					</view>
				</view>
			</template>
			<text class="outpatient-msg">{{data.message}}</text>
			<view class="outpatient-info-container">
				<view class="info" v-for="info in data.tableData">
					<view class="info-title">
						{{info.label}}
					</view>
					<view class="info-desc">
						{{info.value}}
					</view>
				</view>
			</view>
		</uni-card>
	</view>
</template>
<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared',
			virtualHost: true
		},
	}
</script>
<script setup lang="ts">
	defineProps<{
		data : {
			type : string,
			title : string,
			date : string,
			message : string,
			tableData :
			{
				label : string,
				value : string
			}[]
		}
	}>()
</script>

<style lang="scss" scoped>
	.outpatient {
		width: 100%;

		& :deep(.uni-card) {
			border-radius: 16rpx;
		}
	}

	.outpatient-date {
		width: 100%;
		@include flex(center);
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #6B7C93;
	}

	.card-header {
		display: flex;
		border-bottom: 1px #EBEEF5 solid;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		overflow: hidden;

		&-box {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			overflow: hidden;
		}

		&-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			font-weight: 500;
			font-size: 32rpx;
			color: #FF5656;
			text-align: center;
			font-style: normal;
			text-transform: none;

			&--title {
				font-size: 15px;
				color: #3a3a3a;
				@include flex(flex-start);

			}
		}
	}


	.outpatient-msg {
		font-size: 28rpx;
		color: #09244B;
	}

	.outpatient-info-container {
		margin: 20rpx 0
	}

	.info {
		@include flex(flex-start);
		font-size: 28rpx;

		margin: 20rpx 0;

		&-title {
			width: 200rpx;
			color: #6B7C93;
		}

		&-desc {
			flex: 1;
			text-align: start;
			color: #09244B;
		}
	}
</style>