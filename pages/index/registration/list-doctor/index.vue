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
		<uni-list class="list-main">
			<uni-list-item v-for="i in 10" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
				thumb-size="lg">
				<template v-slot:body>
					<view style="width: 80%;">
						<view class="doctor-d">
							<text class="doctor-name">杨亦为</text>
							<text class="doctor-profes">副主任医师</text>
						</view>
						<view class="doctro-desc">
							<text
								class="uni-ellipsis-2">医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介</text>
						</view>
					</view>
				</template>
				<template v-slot:footer>
					<button class="right-btn" size="mini" @click="popCheck">余号23</button>
				</template>
			</uni-list-item>
			<uni-list-item thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="lg">
				<template v-slot:body>
					<view style="width: 80%;">
						<view class="doctor-d">
							<text class="doctor-name">杨亦为</text>
							<text class="doctor-profes">副主任医师</text>
						</view>
						<view class="doctro-desc">
							<text
								class="uni-ellipsis-2">医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介</text>
						</view>
					</view>
				</template>
				<template v-slot:footer>
					<button class="right-btn" size="mini" disabled :style="{background: '#C6CBD3'}">约满</button>
				</template>
			</uni-list-item>
		</uni-list>
	</view>

</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import DatePicker from './date-picker'
	import { ref } from 'vue'
	defineOptions({
		name: 'ListDoctor'
	})
	const extraIcon = {
		color: '#4cd964',
		size: '22',
		type: 'gear-filled'
	}
	const banner = ref<any>()
	const dataDetail = ref()
	function popCheck() {
		uni.showActionSheet({
			itemList: ['A', 'B', 'C'],
			success: function (res) {
				console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			},
			fail: function (res) {
				console.log(res.errMsg);
			}
		});
	}
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
	page {}
</style>
<style scoped lang="scss">
	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

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
			box-sizing: border-box;
			padding: 0 32rpx;
			@include flex(flex-start);
			background: rgba(255, 255, 255, 0.5);
			width: 100%;
			height: 74rpx;
			font-size: 28rpx;
		}

	}

	.list-main {
		margin-top: 32rpx;
		padding: 0 32rpx;
		box-sizing: border-box;

		width: 100%;

		.doctor-d {
			padding-right: 8px;
			flex: 1;
			color: #6B7C93;
			overflow: hidden;
		}

		.doctor-name {
			font-size: 18px;
			color: #09244B;
			overflow: hidden;
			font-weight: 600;
		}

		.doctor-profes {
			margin-top: 6rpx;
			margin-left: 8rpx;
			color: #6B7C93;
			font-size: 12px;
			overflow: hidden;
		}

		.doctro-desc {
			margin-top: 6rpx;
			color: #6B7C93;
			font-size: 14px;
			overflow: hidden;
			padding: 10rpx 0;
			letter-spacing: 0.1em;
		}

		.right-btn {
			width: 140rpx;
			height: 60rpx;
			white-space: nowrap;
			font-size: 14px;
			background: #3DBEDF;
			border-radius: 8rpx;
			color: #fff;
			@include flex(center)
		}


	}

	.list-main ::v-deep {
		.uni-list {
			background-color: transparent !important;
		}

		.uni-list-item {
			background-color: transparent !important;
		}
	}
</style>