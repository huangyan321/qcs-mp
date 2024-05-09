<template>
	<view class="add-card">
		<uni-section class="section" title="请填写就诊人身份信息">
			<view class="form-container">
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item required name="idNumber">
						<template v-slot:label>
							<image class="label-cover" src="/static/images/profile/id-card.png" mode="aspectFit">
							</image>
						</template>
						<uni-easyinput v-model="valiFormData.idNumber" placeholder="请输入身份证号" />
					</uni-forms-item>
					<uni-forms-item required name="cardNumber">
						<template v-slot:label>
							<image class="label-cover" src="/static/images/profile/card.png" mode="aspectFit">
							</image>
						</template>
						<uni-easyinput v-model="valiFormData.cardNumber" placeholder="请输入就诊卡号" />
					</uni-forms-item>
					<uni-forms-item name="telNumber">
						<template v-slot:label>
							<image class="label-cover" src="/static/images/profile/tel.png" mode="aspectFit">
							</image>
						</template>
						<uni-easyinput v-model="valiFormData.telNumber" placeholder="请输入联系电话" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>
		<button class="submit" @click="submit">完成</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const valiFormData = {
		name: '',
		age: ''
	}
	const valiForm = ref()
	const rules = {
		idNumber: {
			rules: [{
				required: true,
				errorMessage: '身份证号不能为空'
			}, {
				format: 'number',
				errorMessage: '身份证号只能输入数字'
			}]
		},
		cardNumber: {
			rules: [{
				required: true,
				errorMessage: '就诊卡号不能为空'
			}, {
				format: 'number',
				errorMessage: '就诊卡号只能输入数字'
			}]
		},
		telNumber: {
			rules: [{
				required: true,
				errorMessage: '联系电话不能为空'
			}, {
				format: 'number',
				errorMessage: '联系电话只能输入数字'
			}]
		}
	}
	function submit(ref) {
		valiForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>

<style scoped lang="scss">
	.add-card {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		.label-cover {
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
		& :deep(.uni-forms-item) {
			@include flex(flex-start);
		}
		.submit {
			@include flex(center);
			width: 100%;
			margin: 20rpx 0;
			background-color: #3DBEDF;
			color: #ffffff;
			font-size: 32rpx;
			padding: 10rpx 0;
			height: 88rpx;

			&:active {
				background-color: #3ab5d3;
			}

			&::after {
				border: none;
			}
		}

		.form-container {
			padding: 20rpx;
		}

		& :deep(.uni-section) {
			border-radius: 16rpx;
		}
	}
</style>