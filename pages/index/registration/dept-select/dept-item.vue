<template>
	<view class="dept-item" @click="$emit('click',name )">
		<image class="dept-icon" :src="icon" mode="aspectFit"></image>
		<text class="dept-name">{{name}}</text>
	</view>

</template>

<script>
	export default {
		name: 'DeptSelectItem',
		options: {
			virtualHost: true
		},
		emits: ['click'],
		props: {
			icon: String,
			name: String
		}
	}
</script>

<style scoped lang="scss">
	.dept-item {
		width: 48%;
		margin: 10rpx;
		box-sizing: border-box;
		@include flex(flex-start);
		height: 120rpx;
		background: #FFFFFF;
		border-radius: 16rpx;
		border: 2rpx solid rgba(61, 190, 223, 0.2);
		padding: 10rpx 20rpx;
	}

	.dept-item:nth-child(odd) {
		margin-left: 0;
	}

	.dept-item:nth-child(even) {
		margin-right: 0;
	}

	.dept-icon {
		width: 90rpx;
		height: 90rpx;
	}

	.dept-name {
		font-weight: 400;
		font-size: 30rpx;
		color: #09244B;
		line-height: 35rpx;
		text-align: left;
		font-style: normal;
		text-transform: none;
		margin-left: 10rpx;
	}
</style>