<template>
	<div class="user">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="clearfix user-top">
			<div class="pull-left">
				<p class="user-avator">
					<img src="../../assets/mine/avator.jpg" alt="" />
				</p>
			</div>
			<div class="user-top-rt">
				<p>18689345678</p>
				<span><i class="icon-vip"></i>VIP会员</span>
			</div>
		</div>
		<div class="user-bill">
			<ul class="user-bill-bar clearfix">
				<li>
					<router-link to="/billList">
						<i class="icon-bill icon-prepay"></i>
						<p>待付款</p>
					</router-link>
				</li>
				<li>
					<router-link to="/billList">
						<i class="icon-bill icon-prerev"></i>
						<p>待收货</p>
					</router-link>
				</li>
				<li>
					<router-link to="/billList">
						<i class="icon-bill icon-all-bill"></i>
						<p>全部订单</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="user-resort">
			<div class="user-resort-top">我的资产</div>
			<div class="user-resort-box clearfix">
				<router-link to="/wallet">
					<span>0张可用</span><br/>优惠券
				</router-link>
				<router-link to="/wallet">
					<span>0</span><br/>VIP币
				</router-link>
				<router-link to="/wallet">
					<span>90.00</span><br/>零钱
				</router-link>
				<router-link to="/wallet">
					<span>抢购</span><br/>VIP宝
				</router-link>
			</div>
		</div>
		<div class="user-resort">
			<div class="user-resort-top">我的特卖</div>
			<div class="user-resort-box clearfix user-sale">
				<router-link to="/wallet">
					<i class="icon-sale icon-star"></i><br/>我的专属
				</router-link>
				<router-link to="/wallet">
					<i class="icon-sale icon-ban"></i><br/>品牌收藏
				</router-link>
				<router-link to="/wallet">
					<i class="icon-sale icon-fav"></i><br/>商品收藏
				</router-link>
				<router-link to="/wallet">
					<i class="icon-sale icon-his"></i><br/>我的足迹
				</router-link>
			</div>
		</div>
		<div class="user-info-list">
	    	<ul>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">
	    				会员俱乐部
	    				<span class="pull-right">领取10元券</span>
	    			</a>
	    		</li>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">
	    				推荐有奖
	    				<span class="pull-right">领取10元券</span>
	    			</a>
	    		</li>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">
	    				VIP金融
	    				<span class="pull-right">领取10元券</span>
	    			</a>
	    		</li>
	    	</ul>
		</div>
		<div class="user-info-list">
	    	<ul>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">账户与安全</a>
	    		</li>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">VIP客服</a>
	    		</li>
	    		<li class="info-item">
	    			<a href="javascript:void(0)" class="right-arrow">关于VIP</a>
	    		</li>
	    	</ul>
		</div>
	</div>
</template>
<script>
	import NavTitle from '../../components/navtitle.vue';
	export default {
		components: {
			NavTitle
		},
		data () {
			return {
				title: '个人中心'
			}
	  	}
	}
</script>
<style lang="less" scoped>
	@import "../../styles/common.less";
	.user{
		margin-top: 60px;
		background: #f2f2f2;
		.user-top{
			padding: 20px .1rem;
			border-bottom: 1px solid #eee;
			background: #fff;
			.user-avator{
				margin-right: 20px;
				img{
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
			}
			.user-top-rt{
				>p{
					font-size: .28rem;
					color: @altColor;
				}
				>span{
					font-size: .24rem;
					color: @subColor;
					.icon-vip{
						background: url(../../assets/mine/vip.png) no-repeat center;
						display: inline-block;
						width: 20px;
						height: 20px;
						vertical-align: bottom;
					}
				}
			}
		}
		.user-bill{
			background: #fff;
			margin-bottom: 10px;
			.user-bill-bar{
				padding: 20px 0;
				li{
					float: left;
					width: 33%;
					text-align: center;
					i.icon-bill{
						display: inline-block;
						width: 30px;
						height: 30px;
						border-radius: 50%;
					}
					i.icon-prepay{
						background: #fcf7e6 url(../../assets/mine/pay.png) no-repeat center;
					}
					i.icon-prerev{
						background: #fcf7e6 url(../../assets/mine/reve.png) no-repeat center;
					}
					i.icon-all-bill{
						background: #fcf7e6 url(../../assets/mine/all.png) no-repeat center;
					}
					p{
						font-size: .24rem;
						color: @subColor;
					}
				}
			}
		}
		.user-resort{
			background: #fff;
			color: @altColor;
			margin-bottom: 10px;
			.user-resort-top{
				font-size: .28rem;
				border-bottom: 1px solid #eee;
				padding: 5px .1rem;

			}
			.user-resort-box{
				text-align: center;
				font-size: .24rem;
				padding: 10px 0;
				border-bottom: 1px solid #eee;
				>a{
					color: @altColor;
					float: left;
					width: 24%;
					border-right: 1px solid #ddd;
					span{
						color: @subColor;
					}
				}
				>a:last-child{
					border-right: 0;
					float: right;
				}
			}
			.user-sale{
				>a{
					border: 0;
					.icon-sale{
						display: inline-block;
						width: 30px;
						height: 30px;
					}
					.icon-ban{
						background: url(../../assets/mine/icon-ban.png) no-repeat center;
					}
					.icon-star{
						background: url(../../assets/mine/icon-star.png) no-repeat center;
					}
					.icon-fav{
						background: url(../../assets/mine/icon-fav.png) no-repeat center;
					}
					.icon-his{
						background: url(../../assets/mine/icon-his.png) no-repeat center;
					}
				}
			}
		}
		.user-info-list{
			background: #fff;
			margin-bottom: 10px;
			>ul{
				padding: 0 .1rem;
				li.info-item{
					background: #fff;
					padding: 10px 0;
					border-bottom: 1px solid @lineColor;
					a{
						font-size: .24rem;
						color: @altColor;
						width: 100%;
						display: inline-block;
						>span{
							font-size: .1rem;
							color: @tipColor;
							margin-right: .1rem;
						}
					}
				}
				li.info-item:last-child{
					border-bottom: 0;
				}
			}
		}
	}
</style>
