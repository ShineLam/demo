<template>
	<div class="bill">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="bill-detail-large">
			<div class="bill-address">
				<div class="bill-address-title">收货地址</div>
				<div class="bill-address-user">					
					<p>李小璐</p>
					<span>18345453413</span>
				</div>
				<div class="bill-address-name">
					广东省深圳市南山区科技北二路18号
				</div>
			</div>
			<div class="bill-content">
				<div class="bill-item-title">商品信息</div>
				<div class="order-main">
					<div class="order-img">
						<img src="../../assets/home/goods1.jpg" alt="" />
					</div>
					<div class="order-detail">
						<div class="order-detail-item">							
							<p class="order-name">17年（秋季品）藏蓝色针织套装</p>
							<span class="font-weight">￥269</span>
						</div>
						<div class="order-detail-item tip-color">							
							<p>OSA11周年庆典女装专场</p>
							<span>x<span>1</span></span>
						</div>
					</div>
				</div>
			</div>
			<div class="bill-info">
				<div class="bill-info-item">
					<p>订单编号</p>
					<span>83993094304304</span>
				</div>
				<div class="bill-info-item">
					<p>下单时间</p>
					<span>2017-10-11 17:45:45</span>
				</div>
				<div class="bill-info-item">
					<p>订单状态</p>
					<span>已取消</span>
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
		font-size: .28rem;
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
			.bill-address-user{
				display: flex;
				>p{
					flex: 1;
				}
				>span{
					flex: 1;
					text-align: right;
			}
			}			
		}
		.bill-info{
			background: #fff;
			padding: .2rem;
			color: @subColor;
			
			.bill-info-item{
				line-height: .5rem;
				display: flex;
				>p{
					flex: 1;
				}
				>span{
					flex: 1;
					text-align: right;
				}
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
				display: flex;
				.order-img{
					flex: 1;
					margin-right: 2%;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.order-detail{
					flex: 2;
					>.order-detail-item{
						margin-bottom: .1rem;
						display: flex;
						>p{
							flex: 1;
						}
						>span{
							flex: .2;
							text-align: right;
						}
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
			padding: .2rem .2rem;
			background: #fff;
			>a{
				margin-left: .2rem;
			}
		}
	}
</style>