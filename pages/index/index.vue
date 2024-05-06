<template>
	<view class="content">
		<HeadBar style="width: 100%;"></HeadBar>
		<PatientCard style="width: 100%;"></PatientCard>
		<FunctionalBox style="width: 100%;"></FunctionalBox>
		<div class="health-news">
			<uni-section style="width: 100%;box-sizing: border-box;" class="mb-10" title="健康咨询">
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
	</view>
</template>

<script setup lang="ts">
	import HeadBar from './head-bar'
	import PatientCard from './patient-card'
	import FunctionalBox from './functinal-box'
</script>

<style scoped lang="scss">
	.content {
		@include flex(flex-start, column);
		box-sizing: border-box;
		padding: 30rpx;

		.health-news {
			width: 100%;
			margin: 10rpx 0;

			.news-item {
				@include flex(center, row);

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

					}

					.news-keyword {
						margin-top: 10rpx;
						min-height: 100rpx
					}

					.news-footer {
						@include flex();
					}
				}
			}
		}
	}
</style>