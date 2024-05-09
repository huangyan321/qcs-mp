<template>
	<div class="health-news">
		<view class="news-item" v-for="item in 10" :key="item" @click="goDetail">
			<image class="news-cover" src="/static/images/news/cover.jpg" mode="aspectFill"></image>
			<view class="item-detail">
				<view class="news-title">
					健康咨询
				</view>
				<view class="news-keyword">
					<text class="news-keyword-item">
						关键词1
					</text>
					<text class="news-keyword-item">
						关键词2
					</text>
				</view>
				<view class="news-footer">
					<view class="news-date">
						<text>2024-03-09</text>
					</view>
					<view class="news-views">
						<uni-icons style="margin-right: 10rpx;" type="eye" size="16"></uni-icons>
						<text>103</text>
					</view>
				</view>
			</view>
		</view>

	</div>
</template>

<script setup lang="ts">
	function goDetail() {
		uni.navigateTo({
			url: '/pages/index/news/detail/index'
		})
	}
</script>

<style lang="scss" scoped>
	.health-news {
		width: 100%;
		padding: 24rpx;
		box-sizing: border-box;
		
		.news-item {
			box-sizing: border-box;
			@include flex(center, row);
			padding: 0 10px;
			margin: 0 10rpx 30rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;
			padding: 20rpx;

			.news-cover {
				width: 240rpx;
				height: 172rpx;
			}

			.item-detail {
				flex: 1;
				padding: 0 20rpx;

				.news-title {
					font-weight: 500;
					font-size: 32rpx;
					color: #09244B;
					font-weight: 600;
				}

				.news-keyword {
					margin-top: 10rpx;

					min-height: 80rpx;
					font-size: 24rpx;

					&-item {
						color: #3DBEDF;
						background-color: rgba(61, 190, 223, 0.1);
						padding: 4rpx 12rpx;
						border-radius: 4rpx;
						margin: 0 10rpx 0 0
					}

					.news-date {
						font-weight: 400;
						font-size: 28rpx;
						color: #6B7C93;
						text-align: center;
						font-style: normal;
						text-transform: none;
					}
				}


				.news-footer {
					@include flex();
				}

				.news-views {
					font-weight: 400;
					font-size: 28rpx;
					color: #6B7C93;
					text-align: center;
					font-style: normal;
					text-transform: none;
				}
			}
		}
	}
</style>