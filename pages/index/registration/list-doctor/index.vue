<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
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
		<DoctorList :list-data="listData" @toggle="toggle"></DoctorList>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" border-radius="10px 10px 0 0" background-color="#fff" @change="popupChange">
			<view class="popup-content">
				<view class="doctor-d">
					<text class="doctor-name">杨亦为</text>
					<text class="doctor-profes">副主任医师</text>
				</view>
				<view class="doctro-desc">
					<text class="uni-ellipsis-2">就诊日期：2024-02-11 周四</text>
				</view>
				<view class="view-date">
					<view class="view-date-title">
						<text>选择就诊时间</text>
					</view>
					<view class="view-date-select">
						<button>上午</button>
						<button>下午</button>
					</view>
				</view>
				<button class="confirm-btn" @click="confirm">确认</button>
			</view>
		</uni-popup>
	</view>

</template>

<script setup lang="ts">
	import DoctorList from './list.vue'
	import { onLoad } from '@dcloudio/uni-app'
	import DatePicker from './date-picker'
	import { ref } from 'vue'
	const show = ref(false)
	const popup = ref()
	defineOptions({
		name: 'ListDoctor'
	})
	const banner = ref<any>()
	const dataDetail = ref()

	// 是否有号过滤
	function filterList() { }

	// 医生列表
	const listData = ref([
		{
			id: 1,
			name: '杨亦为',
			professional: '副主任医师',
			profile: '医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介',
			restCount: 23,
		},
		{
			id: 2,
			name: '杨亦为',
			professional: '副主任医师',
			profile: '医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介简介医生简介医生简介医生简介医生简介',
			restCount: 0,
		}
	])



	// 底部弹框
	function popupChange(e : any) {
		show.value = e.show
	}
	function toggle() {
		console.log('toggle');
		popup.value.open('bottom')
	}
	function confirm() {
		uni.navigateTo({
			url: '/pages/index/registration/result/index?query=' + encodeURIComponent(JSON.stringify({ status: '1' }))
		})
	}
	// 加载上个页面传入的数据
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

	.popup-content {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background-color: #fff;
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}

	.confirm-btn {
		width: 100%;
		margin: 20rpx 0;
		background-color: #3DBEDF;
		color: #FFFFFF;
		font-size: 32rpx;

		&:active {
			background-color: #3fc7e8;
		}

		&::after {
			border: none;
		}
	}

	.view-date {
		width: 100%;
		background: rgba(61, 190, 223, 0.06);
		border-radius: 8rpx;
		margin: 20rpx 0;
		padding: 20rpx 10rpx;

		.view-date-title {
			color: #09244B;
			font-size: 30rpx;
		}

		.view-date-select {
			@include flex(flex-start);
			padding: 20rpx 0;

			button {
				background: rgba(61, 190, 223, 0.1);
				border-radius: 8rpx 8rpx 8rpx 8rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				font-size: 30rpx;
				color: #3DBEDF;
				line-height: 35rpx;
				text-align: left;
				font-style: normal;
				text-transform: none;
				padding: 20rpx 50rpx;
				margin: 10rpx;

				&::after {
					border: 2rpx solid #3DBEDF;
				}
			}
		}


	}
</style>