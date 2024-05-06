<template>
	<view class="lottie">
		<canvas :id="uid" type="2d" :style="{
			width: width + 'rpx',
			height:height + 'rpx',
		}"></canvas>
	</view>
</template>

<script setup lang="ts">
	import { onMounted, getCurrentInstance } from 'vue'
	import lottie from 'lottie-miniprogram'
	const vm = getCurrentInstance()
	const props = withDefaults(defineProps<{
		animationData : any,
		uid : string;
		width : number;
		height : number;
	}>(), {
		width: 300,
		height: 300
	})
	let _inited = false
	let ani = null
	function init() {
		if (_inited) return
		const query = uni.createSelectorQuery().in(vm.proxy);
		query.select('#' + props.uid).node(res => {
			const canvas = res.node
			const context = canvas.getContext('2d')

			canvas.width = 300
			canvas.height = 300

			lottie.setup(canvas)
			ani = lottie.loadAnimation({
				loop: true,
				autoplay: true,
				animationData: props.animationData,
				rendererSettings: {
					context,
				},
			})
			_inited = true
		}).exec()
	}
	function play() {
		ani.play()
	}
	function pause() {
		ani.pause()
	}
	onMounted(() => {
		init()
	})
	defineExpose({
		play,
		pause
	})
</script>
<style lang="scss" scoped>
	.lottie {}
</style>