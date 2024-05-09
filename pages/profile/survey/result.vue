<template>
	<view class="survey-result">
		<view class="icon">
			<image class="icon-src" src="/static/images/result/success.png" mode="aspectFit" />
		</view>
		<view class="text">
			提交成功
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		@include flex(center, column);
	}
</style>
<style scoped lang="scss">
	.survey-result {
		@include flex(center, column);
		flex: 1;
		width: 100%;
		height: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		.icon-src {
			width: 120rpx;
			height: 120rpx;
		}

		.text {
			font-weight: 600;
			font-size: 40rpx;
			color: #09244B;
			text-align: center;
			font-style: normal;
			text-transform: none;
		}
	}
</style>