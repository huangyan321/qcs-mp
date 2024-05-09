<template>
	<view class="survey">
		<scroll-view class="survey-wrap" scroll-y>
			<view class="survey-title">
				<text>门诊就医满意度调查</text>
			</view>
			<view class="survey-content" v-for="(question,index) in questions" :key="item">
				<view class="survey-content-list">
					<view class="survey-content-question">
						<text>{{index+1}}、{{question.question}}</text>
					</view>
					<view class="survey-content-answer">
						<radio-group @change="radioChange">
							<label class="answer-list-cell" v-for="(item, index) in question.answers" :key="item.value">
								<radio style="transform:scale(0.7)" color="#3DBEDF" :value="item.value"
									:checked="index === current" />
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
			</view>
		</scroll-view>
		<button class="submit" @click="submit">
			<text>提交</text>
		</button>
	</view>
</template>

<script setup lang="ts">
	const questions = [{
		question: '医院环境',
		answers: [{
			value: '1',
			name: '满意',
			checked: 'true'
		},
		{
			value: '2',
			name: '比较满意'
		},
		{
			value: '3',
			name: '不满意'
		},]
	},
	{
		question: '医院服务',
		answers: [{
			value: '1',
			name: '满意',
			checked: 'true'
		},
		{
			value: '2',
			name: '比较满意'
		},
		{
			value: '3',
			name: '不满意'
		},]
	},
	{
		question: '医院医德',
		answers: [{
			value: '1',
			name: '满意',
			checked: 'true'
		},
		{
			value: '2',
			name: '比较满意'
		},
		{
			value: '3',
			name: '不满意'
		},]
	}
	]
	const current = 0
	function radioChange() { }
	function submit() {
		
		uni.redirectTo({
			url: '/pages/profile/survey/result'
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
	.survey {
		flex: 1;
		width: 100%;
		height: 100%;
		padding: 32rpx;
		box-sizing: border-box;

		&-wrap {
			background: #FFFFFF;
			border-radius: 16rpx;
			padding: 32rpx 0 32rpx 32rpx;
			width: 100%;
			height: 90%;
			box-sizing: border-box;
		}

		&-title {
			font-weight: 600;
		}

		&-content {
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

		.answer-list-cell {
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