<template>
	<div class="bill">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="bill-detail-large">
			<div class="bill-address">
				<div class="bill-address-title">收货地址</div>
				<div class="bill-address-user">
					<span>李小璐</span>
					<span class="pull-right">18345453413</span>
				</div>
				<div class="bill-address-name">
					广东省深圳市南山区科技北二路18号
				</div>
			</div>
			<div class="bill-content">
				<div class="bill-item-title">商品信息</div>
				<div class="order-main clearfix">
					<div class="pull-left order-img">
						<img src="../../assets/home/goods1.jpg" alt="" />
					</div>
					<div class="pull-right order-detail">
						<div class="clearfix">
							<span class="pull-right order-price">￥269</span>
							<p class="order-name">17年（秋季品）藏蓝色针织套装</p>
						</div>
						<div class="clearfix order-vender">
							<span class="pull-right">x<span>1</span></span>
							<p>OSA11周年庆典女装专场</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bill-info">
				<div class="bill-info-item">
					<span>订单编号</span>
					<span class="pull-right">83993094304304</span>
				</div>
				<div class="bill-info-item">
					<span>下单时间</span>
					<span class="pull-right">2017-10-11 17:45:45</span>
				</div>
				<div class="bill-info-item">
					<span>订单状态</span>
					<span class="pull-right">已取消</span>
				</div>
			</div>
		</div>
		<div class="bill-detail-btn">
			<div>
				<router-link to='/' class="btn btn-general">删除订单</router-link>
				<router-link to='/' class="btn btn-primary">再次购买</router-link>				
			</div>
		</div>
	</div>
</template>
<script>
	import NavTitle from '../../components/navtitle.vue'
	export default {
		components: {
			NavTitle
		},
		data () {
			return {
				title: '产品预订'
			}
	  	}
	}	
</script>
<style lang="less" scoped>
	@import "../../styles/common.less";
	.bill-detail-large{
		margin-top: 1rem;
		.bill-address{
			padding: .2rem;
			background: #fff;
			margin-bottom: .2rem;
			.bill-address-title{
				font-weight: bold;
				line-height: .44rem;
			}
			.bill-address-user, .bill-address-name{
				color: @altColor;
				line-height: .44rem;
			}
		}
		.bill-info{
			background: #fff;
			padding: .2rem;
			color: @subColor;
			
			.bill-info-item{
				line-height: .5rem;
			}
		}				
		.bill-content{
			background: #fff;			
			margin-bottom: .2rem;
			padding: .2rem 0;
			.bill-item-title{
				padding: .2rem 0;
				margin: 0 .2rem;
				border-bottom: .02rem solid @lineColor;
				color: @altColor;
			}
			.order-main{
				padding: .2rem .2rem 0;
				.order-img{
					width: 30%;
					height: 1.6rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.order-detail{
					width: 67%;
					>.clearfix{
						margin-bottom: .1rem;
						.order-price{
							font-weight: bold;
						}
						.order-prev-price{
							font-size: .24rem;
							color: @tipColor;
						}
						.order-num{
							width: .5rem;
							height: .5rem;
							background: #fff;
							outline: 0;
							border: .02rem solid #ddd;
						}
						.order-count{
							padding: .16rem;
						}
					}
					.order-vender{
						font-size: .24rem;
						color: @tipColor;
					}				
				}	
			}	
		}				
	}
	.bill-detail-btn{
		text-align: right;
		position: fixed;
		bottom: 0;
		width: 100%;
		>div{
			padding: .1rem .2rem;
			background: #fff;
			>a{
				margin-left: .2rem;
			}
		}
	}
</style>