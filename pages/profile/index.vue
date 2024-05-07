<template>
	<view class="profile">
		<view class="userInfo" @click.capture="toUserInfo">
			<view class="defaultAvatarUrl">
				<uni-icons color="#ffffff" size="40" type="person-filled" />
			</view>

			<view class="user-box">
				<view class="logo-title">
					<text class="uer-name"
						v-if="hasLogin">{{userInfo.nickname||userInfo.username||userInfo.mobile}}</text>
					<text class="uer-name" v-else>未登录</text>
				</view>
				<view class="user-id">
					<text>ID:22369874</text>
				</view>
			</view>
		</view>
		<uni-grid class="grid" :column="3" :showBorder="false" :square="true">
			<uni-grid-item class="item" v-for="(item,index) in gridList" @click.native="tapGrid(index)" :key="index">
				<image class="icon" :src="item.icon" mode="aspectFit"></image>
				<text class="text">{{item.text}}</text>
			</uni-grid-item>
		</uni-grid>
		<uni-list class="center-list" v-for="(sublist , index) in ucenterList" :key="index">
			<uni-list-item v-for="(item,i) in sublist" :title="item.title" link :rightText="item.rightText" :key="i"
				:clickable="true" :to="item.to" @click="ucenterListClick(item)" :show-extra-icon="true"
				:extraIcon="{type:item.icon,color:'#999'}">
				<template v-slot:footer>
					<view v-if="item.showBadge" class="item-footer">
						<text class="item-footer-text">{{item.rightText}}</text>
						<view class="item-footer-badge"></view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
		<button class="sign-out">退出登录</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const hasLogin = ref(false)
	const gridList = [{
		"text": '就诊人管理',
		"icon": "/static/images/profile/record.png"
	},
	{
		"text": '预约记录',
		"icon": "/static/images/profile/sign.png"

	},
	{
		"text": '就诊记录',
		"icon": "/static/images/profile/service.png"
	},
	]

	const ucenterList = [
		[
			{
				"title": '我的收藏',
				"event": 'signIn',
				"icon": "star"
			},
			{
				"title": '满意度调查',
				"to": '/pages/ucenter/read-news-log/read-news-log',
				"icon": "flag"
			},
			{
				"title": '意见反馈',
				"to": '',
				"event": 'getScore',
				"icon": "email"
			}
		],
	]

	function ucenterListClick() { }
</script>
<style>
	page {
		height: 100%;
		flex: 1;
	}
</style>
<style scoped lang="scss">
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	.profile {
		padding: 0 20rpx;
		position: relative;
		height: 100%;

		.userInfo {
			@include flex(flex-start, row);
			padding: 30px 0;
		}

		.defaultAvatarUrl {
			width: 120rpx;
			height: 120rpx;
			background-color: #007aff;
			border-radius: 100%;
			justify-content: center;
			align-items: center;
		}

		.logo-title {
			@include flex()
		}

		.user-box {
			margin-left: 30rpx;
		}

		.uer-name {
			font-size: 32rpx;
			color: #333333;
		}

		.user-id {
			margin-top: 20rpx;
			color: #A0A7BA;
			font-size: 28rpx;
		}

		.grid {
			background-color: #FFFFFF;
			margin-bottom: 8px;
			border-radius: 16rpx;
		}

		.uni-grid .text {
			font-size: 16px;
			height: 25px;
			line-height: 25px;
			color: #09244B;
			font-size: 30rpx;
		}

		.uni-grid .icon {
			width: 100rpx;
			height: 100rpx;
		}

		.uni-grid .item ::v-deep .uni-grid-item__box {
			justify-content: center;
			align-items: center;
		}

		.center-list {
			flex: 1;
			background-color: #ffffff;
		}

		.center-list ::v-deep .uni-list--border:after {
			-webkit-transform: scaleY(0.2);
			transform: scaleY(0.2);
			margin-left: 80rpx;
		}

		.center-list ::v-deep .uni-list--border-top,
		.center-list ::v-deep .uni-list--border-bottom {
			display: none;
		}

		.item-footer {
			flex-direction: row;
			align-items: center;
		}

		.item-footer-text {
			color: #999;
			font-size: 24rpx;
			padding-right: 10rpx;
		}

		.item-footer-badge {
			width: 20rpx;
			height: 20rpx;
			border-radius: 50%;

			background-color: #DD524D;
		}

		.sign-out {
			width: 100%;
			margin: 20rpx 0;
			background-color: #ffffff;
			color: #3DBEDF;
			font-size: 32rpx;
			padding: 10rpx 0;

			&:active {
				background-color: #dcf2fd;
			}
			&::after {
				border: none;
			}
		}
	}
</style>