<template>
	<view class="content">
		<HeadBar style="width: 100%;"></HeadBar>
		<PatientCard style="width: 100%;"></PatientCard>
		<FunctionalBox style="width: 100%;" @navigate="navigate"></FunctionalBox>
		<News style="width: 100%;"></News>
	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import HeadBar from './head-bar'
	import PatientCard from './patient-card'
	import FunctionalBox from './functinal-box'
	import News from './news'
	function navigate(url : string) {
		uni.navigateTo({
			url
		})
	}
</script>

<style scoped lang="scss">
	.content {
		@include flex(flex-start, column);
		box-sizing: border-box;
		padding: 0 32rpx;
		background: linear-gradient(180deg, #D3F2FF 0%, #F7FAFB 45%);
	}
</style>