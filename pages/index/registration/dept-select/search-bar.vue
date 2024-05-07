<template>
	<view class="search-bar">
		<view class="search-bar-content">
			<uni-icons class="search-icon" type="search" color="#999"></uni-icons>
			<input focus class="search-input" type="text" placeholder="请输入科室或医生名称" confirm-type="search"
				:value="searchText" @confirm="confirmInput" @input="changeInput" />
			<uni-icons v-if="showClearIcon" type="close" size="22" color="#333" @click="changeInput"></uni-icons>
		</view>
		<button class="right-btn" size="mini" @click="$emit('toast')">预约须知</button>
	</view>

</template>

<script setup lang="ts">
	import { ref } from 'vue'
	defineOptions({
		name: 'DeptSelectSearchBar'
	})
	const searchText = ref()
	const showClearIcon = ref(false)
	function confirmInput() { }
	function changeInput() { }
</script>

<style scoped lang="scss">
	.search-bar {
		@include flex(center);
	}

	.search-bar-content {
		width: 100%;
		@include flex(flex-start);
		height: 68rpx;
		background-color: #fff;
		border-radius: 30rpx;
		flex-grow: 1;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.right-btn {
		width: 220rpx;
		margin-left: 20rpx;
		white-space: nowrap;
		background: #3dbedf;
		border-radius: 82rpx;
		color: #fff;
		height: 68rpx;
		line-height: 68rpx;

		&:active {
			background: #42cef1;
		}
	}

	.search-placeholder {
		width: 100%;
		font-size: 14px;
		color: #999;
		margin-left: 20rpx;
	}

	.search-input {
		width: 100%;
		font-size: 14px;
		color: #333;
		margin-left: 20rpx;
	}
</style>