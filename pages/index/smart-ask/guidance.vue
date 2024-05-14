<template>
	<view class="guidance">
		<image class="bot-avator" src="/static/images/smart-ask/bot.png" mode="aspectFit"></image>
		<view class="title">
			<text>哈喽，我是您的AI预问诊小助手。</text>
		</view>
		<view class="sub-title">
			<text>为了让医生提前了解您的状况，更高效地开展诊疗服务，您可以详细描述症状，让我来帮您找到对应症状科室的医生。</text>
		</view>
		<view class="symptom">
			<view class="symptom-item">
				<text>发热</text>
			</view>
			<view class="symptom-item">
				<text>发热</text>
			</view>
			<view class="symptom-item">
				<text>发热</text>
			</view>
			<view class="symptom-item">
				<text>发热</text>
			</view>
			<view class="symptom-item">
				<text>发热</text>
			</view>
			<view class="symptom-item">
				<text>发热</text>
			</view>
		</view>
		<view class="more">
			<text>更多部位症状</text>
			<image class="more-icon" src="/static/images/smart-ask/more.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
	.guidance {
		width: 686rpx;
		height: 504rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		position: relative;
		padding: 24rpx;
		box-sizing: border-box;
		@include flex(flex-start, column);

		.bot-avator {
			width: 120rpx;
			height: 120rpx;
			position: absolute;
			left: 0;
			top: -56rpx;
		}

		.title {
			font-weight: 500;
			font-size: 32rpx;
			color: #3DBEDF;
			line-height: 38rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			margin: 10rpx 0 20rpx;
		}

		.sub-title {
			font-weight: 400;
			font-size: 30rpx;
			color: #09244B;
			line-height: 35rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			line-height: 1.4;
			margin: 10rpx 0 20rpx;
		}

		.symptom {
			display: grid;
			width: 100%;
			grid-template-columns: repeat(3, 1fr);
			margin: 10rpx 0 20rpx;
			font-weight: 400;
			font-size: 30rpx;
			color: #09244B;
			text-align: left;
			font-style: normal;
			text-transform: none;

			&-item {
				color: #09244B;
				padding: 8rpx 20rpx;
				box-sizing: border-box;
				margin: 10rpx;
				text-align: center;
				background: rgba(61, 190, 223, 0.06);
				border-radius: 8rpx;
				border: 2rpx solid rgba(61, 190, 223, 0.3);
			}
		}

		.more {
			font-weight: 400;
			font-size: 28rpx;
			color: #3DBEDF;
			line-height: 33rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
			width: 100%;
			text-align: center;
			@include flex(center);

			&-icon {
				margin-left: 10rpx;
				width: 32rpx;
				height: 32rpx;
			}
		}
	}
</style>