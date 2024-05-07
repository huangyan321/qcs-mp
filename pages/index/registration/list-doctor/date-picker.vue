<template>
	<scroll-view class="date-picker-scroller" :scroll="false" :scroll-x="true">
		<view class="date-picker-container">
			<view class="date-box" v-for="i in 7">
				<view class="week">
					<text>周二</text>
				</view>
				<view class="date">
					<text>02.09</text>
				</view>
			</view>
		</view>
	</scroll-view>

</template>

<script>
	export default {
		name: "DatePicker",
		options: {
			virtualHost: true
		},
	}
</script>

<style scoped lang="scss">
	.date-picker-scroller {
		height: 180rpx;
	}
	.date-picker-container {
		width: 100%;
		@include flex(flex-start, row);
		.date-box {
			margin: 0 10rpx;
			padding: 20rpx 24rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			@include flex(center, column);

			.date {
				margin-top: 10rpx;
			}
		}
		.date-box:first-child {
			margin-left: 32rpx;
		}
	}
</style>