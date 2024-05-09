<template>
	<div class="favorite">
		<uni-swipe-action>
			<uni-swipe-action-item v-for="i in 10" :key="i" style="margin: 0 10rpx 0;" @click="bindClick"
				@change="actionChange">
				<view class="news-item">
					<image class="news-cover" src="/static/images/queue.png" mode="aspectFit"></image>
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
				<template v-slot:right>
					<view class="slot-button" @click="bindClick({position:'right',content:{text:'删除'}})"><text
							class="slot-button-text">取消收藏</text></view>
				</template>
			</uni-swipe-action-item>
		</uni-swipe-action>

	</div>
</template>

<script setup lang="ts">
	function goDetail() {
		uni.navigateTo({
			url: '/pages/index/news/detail/index'
		})
	}
	function bindClick() {
		uni.showToast({
			title: '取消收藏'
		})
	}
	function actionChange() {
		console.log('改变');
	}
</script>

<style lang="scss" scoped>
	.favorite {
		width: 100%;
		padding: 24rpx;
		box-sizing: border-box;


		.button-text {
			font-size: 15px;
		}

		.slot-button-text {
			color: #ffffff;
			font-weight: 400;
			font-size: 28rpx;
			color: #FFFFFF;
			text-align: center;
			font-style: normal;
			text-transform: none;
		}

		.slot-button {
			display: flex;
			flex: 1;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			background-color: #ff5a5f;
			border-top-right-radius: 16rpx;
			border-bottom-right-radius: 16rpx;
		}

		.news-item {
			width: 100%;
			box-sizing: border-box;
			@include flex(center, row);
			background-color: #FFFFFF;
			border-radius: 16rpx;
			padding: 20rpx;

			.news-cover {
				width: 240rpx;
				height: 142rpx;
			}

			.item-detail {
				flex: 1;

				.news-title {
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
						color: #6B7C93
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