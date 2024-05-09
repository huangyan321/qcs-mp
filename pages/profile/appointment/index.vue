<template>
	<view class="appointment">
		<view v-for="data in mockData" :key="data.id" class="card">
			<view class="is-default" :style="{
					backgroundColor: data.status === '1' ? '#3DBEDF' : data.status === '2' ? '#FF4D4D' : '#C6CBD3'
				}">
				<text>{{ data.status === '1' ? '待就诊' : data.status === '2' ? '已超时' : '已取消'}}</text>
			</view>
			<uni-section class="section" :title="data.date">
				<uni-list>
					<uni-list-item title="科室" :rightText="data.dept" />
					<uni-list-item title="医生" :rightText="data.doctor" />
					<uni-list-item title="就诊人" :rightText="data.name" />
					<uni-list-item title="号序" :rightText="data.number" />
				</uni-list>
			</uni-section>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const isDefault = ref(true)
	function setDefault(e : any) {
		const value = e.detail.value
		// 选中默认 逻辑
	}
	const mockData = ref([
		{
			id: 1,
			name: '肖俊鑫',
			doctor: '刘医生',
			number: '1',
			dept: '心外科',
			date: '2024-02-11 上午',
			status: '1' // 状态 1: 待就诊 2: 已超时  3. 已取消
		},
		{
			id: 2,
			name: '肖俊鑫',
			doctor: '刘医生',
			number: '1',
			dept: '心外科',
			status: '2' // 状态 1: 待就诊 2: 已超时  3. 已取消
		},
		{
			id: 3,
			name: '肖俊鑫',
			doctor: '刘医生',
			number: '1',
			dept: '心外科',
			status: '3' // 状态 1: 待就诊 2: 已超时  3. 已取消
		}
	])
	async function unbound() {
		const res = await uni.showModal({
			title: '提示',
			content: '确认解绑该就诊人？'
		})
		if (res.confirm) {
			// 解绑逻辑
		}
	}
	function addCard() {
		uni.navigateTo({
			url: '/pages/profile/user-manage/add-card'
		})
	}
</script>

<style lang="scss" scoped>
	.appointment {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		.add-card {
			@include flex(center);
			width: 100%;
			margin: 20rpx 0;
			background-color: #3DBEDF;
			color: #FFFFFF;
			font-size: 32rpx;
			height: 86rpx;
			box-sizing: border-box;

			&:active {
				background-color: #34a3be;
			}

			&::after {
				border: none;
			}
		}

		.card {
			position: relative;
			margin-bottom: 20rpx;

			.is-default {
				position: absolute;
				top: 0%;
				right: 0%;
				background: #3DBEDF;
				border-radius: 0rpx 16rpx 0rpx 16rpx;
				font-weight: 400;
				font-size: 24rpx;
				color: #FFFFFF;
				text-align: left;
				font-style: normal;
				text-transform: none;
				padding: 8rpx 30rpx;
			}

			.section {
				& :deep(.uni-section) {
					border-radius: 16rpx;
				}
			}
		}

		.operate-box {
			width: 100%;
			@include flex(space-between, row);
		}

		.check-box {
			font-weight: 400;
			font-size: 30rpx;
			color: #09244B;
			line-height: 35rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}

		.unbound {
			@include flex(center);
			background: #FF4D4D;
			border-radius: 60rpx;
			box-sizing: border-box;
			color: #FFFFFF;
			width: 156rpx;
			height: 60rpx;
			margin: 0;
			font-weight: 400;
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: left;
			font-style: normal;
			text-transform: none;
		}
	}
</style>