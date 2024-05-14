<template>
	<view class="content">
		<MessageCard v-if="mockList.length && !loading" :data="data" v-for="data in mockList" :key="data.id">
		</MessageCard>
		<uni-load-more v-else-if="loading" status="loading"></uni-load-more>
		<view v-else class="no-data">暂时没有消息</view>
	</view>
</template>

<script setup lang="ts">
	import MessageCard from './msg-card'
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const mockList = ref([])
	const loading = ref(true)
	const modeClass = ref('fade')
	const show = ref(true)
	function handle(type) {
		show.value = !show.value
		modeClass.value = type
	}
	const styles = {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100px',
		height: '100px',
		borderRadius: '5px',
		textAlign: 'center',
		backgroundColor: '#4cd964',
		boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)'
	}

	onLoad(() => {
		// 模拟网络请求
		setTimeout(() => {
			mockList.value = [
				{
					id: 1,
					type: 'fail',
					title: '预约取消',
					date: '2024-02-11 14:09:22',
					message: '肖俊鑫，你好，你的预约已取消！',
					tableData: [
						{
							label: '科室',
							value: "心外科"
						},
						{
							label: '医生',
							value: "刘医生"
						},
						{
							label: '就诊日期',
							value: "2024-02-11 上午"
						}
					]
				},
				{
					id: 2,
					type: 'success',
					title: '预约成功',
					date: '2024-02-10 14:09:22',
					message: '具体就诊信息如下，你可在首页进行在线签到、取消预约等操作！',
					tableData: [
						{
							label: '就诊人',
							value: '晓君姐',
						},
						{
							label: '科室',
							value: "心外科"
						},
						{
							label: '医生',
							value: "刘医生"
						},
						{
							label: '科室位置',
							value: "门诊一号楼3楼"
						},
						{
							label: '就诊日期',
							value: "2024-02-11 上午 第23号"
						}
					]
				}
			]


			loading.value = false
		}, 1000)
	})
</script>

<style lang="scss" scoped>
	/* 下面我们会解释这些 class 是做什么的 */
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}


	.text {
		font-size: 14px;
		color: #fff;
	}

	.content {
		.no-data {
			height: 400rpx;
			width: 100%;
			color: #666;
			font-size: 28rpx;
			@include flex(center, row, nowrap)
		}
	}
</style>
<style>
	page {
		background: linear-gradient(180deg, #D3F2FF 0%, #F7FAFB 45%);
	}
</style>