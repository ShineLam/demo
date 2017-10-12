<template>
	<div class="order">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="swipe-view">
			<swiper :show-desc-mask="false" loop auto dots-position="center">
      			<swiper-item>
        			<img src="../../assets/home/goods1.jpg" alt="">
      			</swiper-item>
    		</swiper>
		</div>
		<div class="order-title">
			<span class="order-reduce">省40.35元</span>
			<span class="order-prog">已享受购物优惠8.5折</span>
		</div>
		<div class="order-main">			
			<div class="order-detail">
				 <div class="clearfix">
				 	<span class="pull-right order-price">￥269</span>
				 	<p class="order-name">17年（秋季品）藏蓝色针织套装</p>
				 </div>
				 <div class="clearfix order-vender">
				 	<s class="pull-right">￥818</s>
				 	<p>OSA11周年庆典女装专场</p>
				 </div>
				 <div class="clearfix order-num-box">
				 	<button class="order-num order-disabled-btn">-</button>
					<span class="order-count">1</span>
					<button class="order-num">+</button>
				 </div>
			</div>
		</div>
		<div class="order-requr">
			￥206-￥40.35=￥228.65
		</div>
		<div class="order-pay">
			<div>
				<p>总金额
					<span class="order-act-pay">￥218.65</span>
					<span class="order-pay-tips">(已省￥559.35)</span>
				</p>
				<a href="javascript:void(0)" class="order-pay-btn">结&nbsp;&nbsp;算</a>
			</div>			
		</div>
	</div>
</template>
<script>
	import NavTitle from '../../components/navtitle.vue'
	import {Swiper, SwiperItem } from 'vux'
	export default {
		components: {
			NavTitle,
			Swiper, 
			SwiperItem
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
	.order{
		.vux-swiper-item{
			img{
				width: 100%;
				height: 100%;
			}
		}
		margin-top: 60px;
		background: #fff;
		.order-title{
			margin-top: 10px;
			padding: 0 1.0rem;
			.order-reduce{
				display: inline-block;
				border: 1px solid @textColor;
				color: @textColor;
				font-size: 1.2rem;
				padding: 0 3px;
			}
			.order-prog{
				color: @subColor;
				font-size: 1.2rem;
			}
		}
		.order-main{
			padding: 15px 1.0rem;
			border-bottom: 1px solid #eee;
			padding-bottom: 20px;
			.order-detail{
				>.clearfix{
					margin-bottom: 5px;				
					.order-name{
						font-size: 1.4rem;
					}
					.order-price{
						font-size: 1.4rem;
						font-weight: bold;
					}
					.order-prev-price{
						font-size: 1.2rem;
						color: @tipColor;
					}					
				}
				.order-num-box{
					text-align: right;
					.order-num{
						width: 25px;
						height: 25px;
						background: #fff;
						outline: 0;
						border: 1px solid #ddd;
					}
					.order-count{
						padding: .8rem;
					}
					.order-disabled-btn{
						color: @tipColor;
					}
				}
				.order-vender{
						font-size: 1.2rem;
						color: @tipColor;
					}				
			}
		}				
		.order-requr{
			font-size: 1.6rem;
			font-weight: bold;
			color: @titleColor;
			text-align: right;
			padding: 10px 1.0rem;
		}
		.order-pay{
			background: #fff;
			text-align: center;
			position: fixed;
			bottom: 0;
			border-top: 1px solid #eee;
			width: 100%;
			padding: 10px 0;
			>div{
				padding: 0 1.0rem;
				p{
					font-size: 1.4rem;
					color: @subColor;
					span.order-act-pay{
						font-size: 1.6rem;
						color: @mainColor;
						font-weight: bold;
					}
					span.order-pay-tips{
						color: @tipColor;
					}
				}
				.order-pay-btn{
					display: inline-block;
					width: 100%;
					background: @mainColor;
					color: #fff;
					font-size: 1.5rem;
					height: 35px;
					line-height: 35px;
					border-radius: 2px;
					margin-top: 5px;
				}
			}			
		}
	}
</style>