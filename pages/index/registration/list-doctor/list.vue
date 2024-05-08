<template>
	<uni-list class="list-main">
		<uni-list-item v-for="data in listData"
			thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="lg">
			<template v-slot:body>
				<view style="width: 80%;">
					<view class="doctor-d">
						<text class="doctor-name">{{data.name}}</text>
						<text class="doctor-profes">{{data.professional}}</text>
					</view>
					<view class="doctro-desc">
						<text class="uni-ellipsis-2">{{data.profile}}</text>
					</view>
				</view>
			</template>
			<template v-slot:footer>
				<button class="right-btn" size="mini" :class="{fulled: data.restCount <= 0}"
					:disabled="data.restCount <= 0"
					@click="popCheck">{{data.restCount <= 0 ? '约满' : `余号${data.restCount}`}}</button>
			</template>
		</uni-list-item>
	</uni-list>

</template>
<script setup lang="ts">
	defineProps<{
		listData : {
			id : number;
			name : string;
			professional : string;
			profile : string;
			restCount : number
		}[]
	}>()
	const emit = defineEmits(['toggle'])
	function popCheck() {
		console.log('popCheck');
		emit('toggle')
	}
</script>
<script lang="ts">
	export default {
		options: {
			styleIsolation: 'shared',
			virtualHost: true
		},
	}
</script>

<style scoped lang="scss">
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
		box-sizing: border-box;
		width: 100%;
	}

	.list-main :deep(.uni-list) {
		background-color: transparent !important;
	}

	.list-main :deep(.uni-list-item) {
		background-color: transparent !important;
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

	.fulled {
		background-color: #C6CBD3;
	}
</style>