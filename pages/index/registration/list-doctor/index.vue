<template>
	<view class="list-doctor">
		<DatePicker></DatePicker>
		<view class="list-filter">
			<view class="content">
				<label>
					<checkbox value="cb" checked="true" @change="filterList" />
					<text>今日有号</text>
				</label>
			</view>
		</view>
		<view class="doctor-info">

		</view>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import DatePicker from './date-picker'
	import { ref } from 'vue'
	defineOptions({
		name: 'ListDoctor'
	})
	const banner = ref<any>()
	const dataDetail = ref()
	function filterList() { }
	async function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			banner.value = JSON.parse(p);
		} catch (error) {
			banner.value = JSON.parse(p);
		}
		uni.showToast({
			icon: 'loading',
			title: '获取中...',
			mask: true
		})
		await uni.setNavigationBarTitle({
			title: banner.value.name
		});

		uni.hideToast()
	}

	onLoad((event) => {
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		load(event.query);
	})
</script>
<style>
	page {
		height: 100%
	}
</style>
<style scoped lang="scss">
	.list-doctor {
		@include flex(flex-start, column);
		height: 100%;
		flex: 1;
		padding: 32rpx 0;
	}

	.list-filter {
		width: 100%;
		box-sizing: border-box;
		border-radius: 8rpx;
		padding: 0 32rpx;

		.content {
			padding: 0 32rpx;
			@include flex(flex-start);
			background: rgba(255, 255, 255, 0.5);
			width: 100%;
			height: 74rpx;
			font-size: 28rpx;
		}

	}
</style>