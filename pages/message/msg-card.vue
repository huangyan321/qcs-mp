<template>
	<view class="outpatient-date">
		<text> {{data.date}} </text>
	</view>
	<uni-card>
		<template v-slot:title>
			<view class="card-header">
				<view class="card-header-box">
					<view class="card-header-content">
						<view :style="{color: data.type === 'success' ? '#33D853' : '#FF5656'}"
							class="card-header-content--title uni-ellipsis">
							<uni-icons type="clear" size="20"
								:color=" data.type === 'success' ? '#33D853' : '#FF5656'"></uni-icons>
							<text style="margin-left: 10rpx;">{{data.title}}</text>
						</view>
					</view>
				</view>
			</view>
		</template>
		<text class="outpatient-msg">{{data.message}}</text>
		<view class="outpatient-info-container">
			<view class="info" v-for="info in data.tableData">
				<view class="info-title">
					{{info.label}}
				</view>
				<view class="info-desc">
					{{info.value}}
				</view>
			</view>
		</view>
	</uni-card>
</template>

<script setup lang="ts">
	defineProps<{
		data : {
			type : string,
			title : string,
			date : string,
			message : string,
			tableData :
			{
				label : string,
				value : string
			}[]
		}
	}>()
</script>

<style lang="scss" scoped>
	.outpatient-date {
		width: 100%;
		@include flex(center);
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #6B7C93;
	}

	.card-header {
		display: flex;
		border-bottom: 1px #EBEEF5 solid;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		overflow: hidden;

		&-box {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			overflow: hidden;
		}

		&-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;

			&--title {
				font-size: 15px;
				color: #3a3a3a;
				@include flex(flex-start);
			}
		}
	}


	.outpatient-msg {
		font-size: 28rpx;
		color: #09244B;
	}

	.outpatient-info-container {
		margin: 20rpx 0
	}

	.info {
		@include flex(flex-start);
		font-size: 28rpx;

		margin: 20rpx 0;

		&-title {
			width: 200rpx;
			color: #6B7C93;
		}

		&-desc {
			flex: 1;
			text-align: start;
			color: #09244B;
		}
	}
</style>