<template>
	<view class="user-manage">
		<view v-for="data in mockData" :key="data.id" class="card">
			<view v-if="data.isDefault" class="is-default">
				<text>默认</text>
			</view>
			<uni-section class="section" :title="data.name">
				<uni-list>
					<uni-list-item title="电话" :rightText="data.tel" />
					<uni-list-item title="身份证号" :rightText="data.idNumber" />
					<uni-list-item title="就诊卡号" :rightText="data.cardNumber" />
					<uni-list-item>
						<template v-slot:body>
							<view class="operate-box">
								<view class="check-box">
									<label v-if="data.isDefault" class="radio">
										<radio :value="data.id" checked="true" style="transform:scale(0.7)"
											color="#3DBEDF" />
										<text>默认就诊人</text>
									</label>
									<label v-else>
										<radio :value="data.id" style="transform:scale(0.7)" color="#3DBEDF"
											@change="setDefault" />
										<text>设为默认</text>
									</label>
								</view>
								<button class="unbound" @click="unbound">解绑</button>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</uni-section>
		</view>
		<button class="add-card" @click="addCard">
			<uni-icons type="plusempty" size="22" color="#FFFFFF"></uni-icons>
			<text>添加就诊人</text>
		</button>
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
			tel: '133****2424',
			idNumber: '23235235235235',
			cardNumber: '3523523525',
			isDefault: true
		},
		{
			id: 2,
			name: '刘志斌',
			tel: '133****2424',
			idNumber: '23235235235235',
			cardNumber: '3523523525',
			isDefault: false
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
	.user-manage {
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