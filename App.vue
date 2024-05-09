<script setup lang="ts">
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
	onLaunch(function () {
		console.log('App Launch')
	})
	onShow(function () {
		console.log('App Show')
	})
	onHide(function () {
		console.log('App Hide')
	})
	uni.loadFontFace({
		family: 'Bitstream Vera Serif Bold',
		source: 'url("https://sungd.github.io/Pacifico.ttf")',
		success() {
			console.log('success')
		}
	})
</script>

<style>
	/*每个页面公共css */
</style>