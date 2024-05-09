<template>
	<SwitchUser ref="switcher" :hide-card="true"></SwitchUser>
	<view class="patient-card">
		<view class="patient-avator">
			<image class="patient-avator-image" src="/static/images/head_icon.png" mode="aspectFit"></image>
		</view>
		<view class="patient-basic-info">
			<view class="top">
				<view class="patient-name">
					<text>肖浚鑫</text>
				</view>
				<view class="change-account" @click="changeUser">
					<text>切换</text>
					<uni-icons style="margin-left: 10rpx;" type="loop" size="16" color="#fff"></uni-icons>
				</view>
			</view>
			<view class="patient-hosnums">
				<text>25023240852858</text>
			</view>
		</view>

		<view class="patient-qrcode" @click="showQR">
			<image class="patient-qrcode-image" src="/static/images/qrcode.png" mode="aspectFit"></image>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup">
			<view class="popup-content"> <image class="popup-image" src="/static/images/qrcode.png"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const switcher = ref()
	const popup = ref()
	function changeUser() {
		switcher.value.toggle()
	}
	function showQR() {
		popup.value.open('center')
	}
</script>

<style scoped lang="scss">
	.popup-content {
		@include flex(center);
		padding: 15px;
		height: 300rpx;
		width: 300rpx;
		border-radius: 16rpx !important;
		background-color: #fff;
	}

	.popup-image {
		border-radius: 16rpx !important;
		width: 100%;
		height: 100%;
	}

	.patient {

		&-card {
			@include flex(flex-start, row);
			position: relative;
			color: #FFFFFF;
			font-weight: 500;
			box-sizing: border-box;
			width: 100%;
			background-color: #3DBEDF;
			padding: 20rpx;
			margin: 20rpx 0;
			border-radius: 16rpx;
		}

		&-basic-info {
			@include flex(flex-start, column);
			align-items: flex-start;
			margin: 0 20rpx;

			.top {
				@include flex(flex-start, row);
				align-items: center;

				.change-account {
					@include flex(center, row);
					background-color: rgba(255, 255, 255, 0.2);
					padding: 2rpx 10rpx;
					border-radius: 10rpx;
					font-weight: 400;
					font-size: 26rpx;
					margin-left: 20rpx;
				}
			}
		}

		&-hosnums {
			margin-top: 20rpx;
			font-weight: 400;
			font-size: 28rpx;
		}

		&-avator {

			&-image {
				width: 72rpx;
				height: 72rpx;
			}
		}

		&-qrcode {
			background-color: #FFFFFF;
			border-radius: 10rpx;
			@include flex(center, row);
			position: absolute;
			top: 30rpx;
			right: 30rpx;

			&-image {
				width: 70rpx;
				height: 70rpx;
			}
		}
	}
</style>