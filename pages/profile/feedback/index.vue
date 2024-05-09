<template>
	<view class="feedback">
		<scroll-view class="feedback-wrap" scroll-y>
			<view class="feedback-title">
				<text>门诊就医满意度调查</text>
			</view>
			<view class="feedback-content">
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label-width="160rpx" label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label-width="160rpx" label="联系方式" required name="contact">
						<uni-easyinput v-model="valiFormData.contact" placeholder="请输入联系方式" />
					</uni-forms-item>
					<uni-forms-item name="suggestion">
						<uni-easyinput type="textarea" autoHeight :maxlength="400" v-model="valiFormData.suggestion"
							placeholder="请输入您宝贵的意见" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</scroll-view>
		<button class="submit" @click="submit">
			<text>提交</text>
		</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const valiFormData = ref({
		name: '',
		contact: '',
		suggestion: ''
	})
	const valiForm = ref()
	const rules = {
		name: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}]
		},
		contact: {
			rules: [{
				required: true,
				errorMessage: '联系方式不能为空'
			}]
		},
		suggestion: {
			rules: [{
				required: true,
				errorMessage: '内容不能为空'
			}]
		}
	}
	function submit() {
		console.log(valiFormData);
		valiForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
			uni.navigateTo({
				url: '/pages/profile/feedback/result'
			})
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>
<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		@include flex(center, column);
		align-items: flex-start;
	}
</style>
<style scoped lang="scss">
	.feedback {
		flex: 1;
		width: 100%;
		height: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		& :deep(.uni-easyinput__content-textarea) {
			min-height: 400rpx;
		}

		&-wrap {
			background: #FFFFFF;
			border-radius: 16rpx;
			padding: 20rpx;
			width: 100%;
			height: 90%;
			box-sizing: border-box;
		}

		&-title {
			font-weight: 600;
		}

		&-content {
			padding: 20rpx;
			box-sizing: border-box;
			margin-top: 32rpx;
			font-weight: 400;
			font-size: 30rpx;
			color: #09244B;
			line-height: 35rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;

			&-list {
				margin-top: 32rpx;
			}

			&-answer {
				margin-top: 18rpx;
			}
		}

		.feedback-list-cell {
			@include flex(flex-start);
			margin-top: 18rpx;
			font-weight: 400;
			font-size: 30rpx;
			color: #6B7C93;
			line-height: 35rpx;
			text-align: left;
			font-style: normal;
			text-transform: none;
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
	}
</style>