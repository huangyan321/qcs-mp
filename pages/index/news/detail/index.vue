<template>
	<view class="news-detail">
		<view class="head-bar">
			<image class="head-cover" src="/static/images/news/cover.jpg" mode="aspectFill"></image>
			<view class="title">
				<text>健康生活，拥抱全面的健康资拥抱全面的健源</text>
			</view>
			<view class="date">
				<text>2024-03-09</text>
			</view>
			<view class="keyword">
				<text class="keyword-item">
					关键词1
				</text>
				<text class="keyword-item">
					关键词2
				</text>
			</view>
		</view>
		<view class="main">
			<text>
				在现代快节奏的生活中，保持健康成为越来越重要的挑战。为了助你拥有全面的健康资源，我们提供以下建议，助你迈向更健康、更充实的生活。 1、均衡饮食:
				营养均衡是健康的基石。保证膳食中包含丰富的蔬菜、水果、全谷物和蛋白质，控制油脂和糖分的摄入，有助于维持身体的健康状态。
				2、走期锻炼:运动是维持身体和心理健康的有效途径。无论是有氧运动、力量训练还是灵活性锻炼，每周都应该安排一定时间进行身体活动，促进新陈代谢、提高免疫力。 3、充足睡眠:
				良好的睡眠是身体恢复和修复的关键。保持规律的睡眠时间，创造一个舒适的睡眠环境，有助于提高注意力、记忆力和情绪稳定性。 4、压力管理:
				学会有效地管理压力，采用冥想、深呼吸、瑜伽等放松技巧，有助于降低身体的应激反应，维持心理健康。 5、定期体检: 定期体检是预防和早期发现潜在健康问题的关键。及时发现并处理健康隐患，有助于避免慢性病的发展。
			</text>
		</view>
		<view class="fab">
			<div class="views">
				<uni-icons type="eye" size="22" color="#09244B"></uni-icons>
				<text style="margin-left: 5rpx;">234</text>
			</div>
			<div class="start">
				<uni-icons type="star" size="22" color="#09244B"></uni-icons>
				<!-- <uni-icons type="star-filled" size="22" color="#09244B"></uni-icons> -->
				<text style="margin-left: 5rpx;">收藏</text>
			</div>
		</view>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	.news-detail {
		box-sizing: border-box;
		padding: 24rpx;
		width: 100%;

		.head-cover {
			width: 100%;
			height: 300rpx;
		}

		.title {
			margin: 20rpx 0;
			font-weight: 500;
			font-size: 36rpx;
			color: #09244B;
			line-height: 42rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}

		.date {
			margin: 20rpx 0;
			color: #6B7C93;
		}

		.keyword {
			margin: 20rpx 0;

			&-item {
				background: rgba(61, 190, 223, 0.1);
				border-radius: 4rpx;
				margin-right: 10rpx;
				padding: 5rpx 10rpx;
				font-weight: 400;
				font-size: 24rpx;
				color: #3DBEDF;
				line-height: 28rpx;
				text-align: center;
				font-style: normal;
				text-transform: none;
			}
		}

		.main {
			font-weight: 400;
			font-size: 30rpx;
			color: #384E6D;
			line-height: 48rpx;
			text-align: justified;
			font-style: normal;
			text-transform: none;
		}

		.fab {
			@include flex(space-between);
			position: fixed;
			bottom: 40rpx;
			left: 50%;
			transform: translate(-50%);
			width: 366rpx;
			height: 86rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 0rpx 24rpx 0rpx rgba(0, 0, 0, 0.1);
			border-radius: 60rpx 60rpx 60rpx 60rpx;
			padding: 0 60rpx;
			border: 2rpx solid rgba(0, 0, 0, 0.1);
			box-sizing: border-box;

			.views,
			.star {
				@include flex(center);
				font-weight: 400;
				font-size: 28rpx;
				color: #09244B;
				text-align: center;
				font-style: normal;
				text-transform: none;
			}
		}
	}
</style>