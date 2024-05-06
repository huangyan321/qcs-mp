<template>
	<div class="health-news">
		<uni-section style="width: 100%;box-sizing: border-box;border-radius: 16rpx;" class="mb-10" title="健康咨询">
			<template v-slot:right>
				<text>更多</text>
				<uni-icons style="margin-left: 10rpx;" type="right" size="16"></uni-icons>
			</template>
			<template>
				<view class="news-item" v-for="item in 10">
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
			</template>
		</uni-section>

	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.health-news {
		width: 100%;
		margin: 10rpx 0;

		.news-item {
			@include flex(center, row);
			padding: 0 10px;
			margin: 40rpx 10rpx;

			.news-cover {
				width: 240rpx;
				height: 172rpx;
			}

			.item-detail {
				flex: 1;

				.news-title {
					font-weight: 500;
					font-size: 32rpx;
					color: #09244B;
					font-weight: 600;
				}

				.news-keyword {
					margin-top: 10rpx;

					min-height: 100rpx;
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
			}
		}
	}
</style>