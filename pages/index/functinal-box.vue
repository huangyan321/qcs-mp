<template>
	<view class="functinal-box">
		<view class="registration">
			<!-- 预约挂号 -->
			<view class="regi-title">
				<text>预约挂号</text>
			</view>
			<view class="regi-title-subhead">
				<text>在家轻松挂号</text>
			</view>
			<button class="regi-btn" type="default" size="mini">去挂号</button>
			<LottieAnimation style="position: absolute; bottom: -30rpx;right: -10rpx;" :width="220" :height="220"
				uid="doctor" :animation-data="animationData">
			</LottieAnimation>
		</view>
		<view class="sign">
			<!-- 在线签到 -->
			<view class="sign-title-wrap">
				<view class="sign-title">
					<text>在线签到</text>
				</view>
				<view class="sign-title-subhead">
					<text>免排队轻松签到</text>
				</view>
			</view>
			<image class="sign-icon" mode="aspectFit" src="/static/images/sign.png"></image>
		</view>
		<view class="queue">
			<!-- 队列查询 -->
			<image class="queue-icon" mode="aspectFit" src="/static/images/queue.png"></image>
			<view class="queue-title">
				<text>队列查询</text>
			</view>
		</view>
		<view class="report">
			<!-- 报告查询 -->
			<image class="report-icon" mode="aspectFit" src="/static/images/report.png"></image>
			<view class="report-title">
				<text>报告查询</text>
			</view>
		</view>
		<view class="consultation">
			<!-- 智能预问诊 -->
			<image class="report-icon" mode="aspectFit" src="/static/images/nani.png"></image>
			<view class="consultation-desc">
				<view class="consultation-title">
					<text>智能预问诊</text>
					<image class="go-ask" mode="aspectFit" src="/static/images/go-ask.png"></image>
				</view>
				<view class="consultation-title-subhead">
					<text>不知道挂什么科室？预问诊给你建议</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import animationData from '@/lib/json/doctor-woman.json'
</script>

<style lang="scss" scoped>
	.functinal-box {
		width: 100%;
		height: 536rpx;
		background-color: #fff;
		padding: 10rpx;
		border-radius: 16rpx;
		display: grid;
		grid-template: repeat(3, 31.2%) / repeat(4, 1fr);
		gap: 16rpx;
		box-sizing: border-box;

		.registration {
			grid-row: 1 / 3;
			grid-column: 1 / 3;
			background: linear-gradient(149deg, #28D87D 0%, #01BD5D 100%);
			border-radius: 16rpx;
			padding: 20rpx;
			color: #ffffff;

			position: relative;

			.regi-title {
				font-size: 40rpx;
				line-height: 60rpx;
				font-weight: 600;
			}

			.regi-title-subhead {
				font-size: 30rpx;
				line-height: 60rpx;
				font-weight: 300;
			}

			.regi-btn {
				color: #02BE5E;
				margin-top: 20rpx;
			}
		}

		.sign {
			grid-column: 3 / 5;
			background-color: #D3FFEB;
			border-radius: 16rpx;
			@include flex(center);
			color: #09244B;
			font-size: 28rpx;

			&-title {
				font-size: 32rpx;
				color: #05C46D
			}

			&-title-wrap {}

			&-icon {
				margin-left: 16rpx;
				width: 72rpx;
			}
		}

		.queue {
			background-color: #F4ECFF;
			@include flex(center, column);
			border-radius: 16rpx;

			&-icon {
				width: 72rpx;
				height: 72rpx;
			}
		}

		.report {
			background-color: #D7EDFF;
			@include flex(center, column);
			border-radius: 16rpx;

			&-icon {
				width: 72rpx;
				height: 72rpx;
			}
		}

		.consultation {
			grid-column: 1 / 5;
			background-color: #FFF5F0;
			border-radius: 16rpx;
			color: #FC7032;
			font-weight: 600;
			padding: 20rpx;

			@include flex(flex-start);

			&-desc {
				margin-left: 10rpx;
				line-height: 60rpx;
			}

			&-title {
				font-size: 32rpx;
				@include flex(flex-start);

				.go-ask {
					margin-left: 10rpx;
					width: 152rpx;
					height: 40rpx;
				}
			}

			&-title-subhead {
				font-size: 28rpx;
				color: #09244B;
			}

			&-icon {
				width: 64rpx;
				height: 64rpx;
			}
		}
	}
</style>