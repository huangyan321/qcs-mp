<template>
	<view class="user-manage">
		<view class="card">
			<uni-section class="section" title="肖浚鑫">
				<uni-list>
					<uni-list-item title="科室" rightText="普通内科" />
					<uni-list-item title="身份证号" rightText="23235235235235" />
					<uni-list-item title="就诊卡号" rightText="3523523525" />
					<uni-list-item>
						<template v-slot:body>
							<view class="operate-box">
								<view class="check-box">
									默认就诊人
								</view>
								<button class="unbound" @click="unbound">解绑</button>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</uni-section>
		</view>
	</view>
</template>

<script setup lang="ts">
	function unbound() {

	}
</script>

<style lang="scss" scoped>
	.user-manage {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		.card {
			.section {
				& :deep(.uni-section) {
					border-radius: 16rpx;
				}
			}
		}

		.operate-box {
			width: 100%;
			@include flex(flex-between);
		}

		.unbound {
			margin-top: 40rpx;
			@include flex(center);
			background: #FF4D4D;
			border-radius: 60rpx;
			box-sizing: border-box;
			flex: 1;
			color: #FFFFFF;
			font-size: 32rpx;
			width: 156rpx;
			height: 60rpx;
		}
	}
</style>