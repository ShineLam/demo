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
			<!--<span class="order-reduce">省40.35元</span>-->
			<span class="order-prog">已享受购物优惠8.5折</span>
		</div>
		<div class="order-main">			
			<div class="order-detail">
				 <div class="order-pro-name">
				 	<p class="order-name">17年（秋季品）藏蓝色针织套装</p>
				 	<span class="order-price">￥269</span>
				 </div>
				 <div class="order-vender">
				 	<p>OSA11周年庆典女装专场</p>
				 	<s>￥818</s>				 	
				 </div>
				 <div class="clearfix order-num-box">
				 	<button class="order-num order-disabled-btn">-</button>
					<span class="order-count">1</span>
					<button class="order-num">+</button>
				 </div>
			</div>
		</div>
		<div class="order-requr">
			<span>￥206 </span> * <span>1</span> = <span>￥228.65</span>
		</div>
		<div class="order-pay">
			<div>
				<p>总金额
					<span class="order-act-pay">￥218.65</span>
					<span class="tip-color">(已省￥559.35)</span>
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
		margin-top: 1.2rem;
		background: #fff;
		.order-title{
			margin-top: .2rem;
			padding: 0 .2rem;
			.order-reduce{
				display: inline-block;
				border: 1px solid @textColor;
				color: @textColor;
				font-size: .28rem;
				padding: 0 .06rem;
			}
			.order-prog{
				color: @subColor;
				font-size: .28rem;
			}
		}
		.order-main{
			padding: .3rem .2rem;
			border-bottom: .02rem solid #eee;
			padding-bottom: .4rem;
			.order-detail{
				>.order-pro-name{
					margin-bottom: .1rem;
					display: flex;
					.order-name{
						flex: 1;
					}
					.order-price{
						font-weight: bold;
						flex: .2;
					}					
				}
				.order-num-box{
					text-align: right;
					margin-top: .2rem;
					.order-num{
						width: .6rem;
						height: .6rem;
						background: #fff;
						outline: 0;
						border: .02rem solid #ddd;
					}
					.order-count{
						padding: .16rem;
					}
					.order-disabled-btn{
						color: @tipColor;
					}
				}
				.order-vender{
					font-size: .28rem;
					color: @tipColor;
					display: flex;
					>s{
						flex: .2;
					}
					>p{
						flex: 1;
					}
				}				
			}
		}				
		.order-requr{
			font-size: 0.36rem;
			font-weight: bold;
			color: @titleColor;
			text-align: right;
			padding: .2rem;
		}
		.order-pay{
			background: #fff;
			text-align: center;
			position: fixed;
			bottom: 0;
			border-top: 1px solid #eee;
			width: 100%;
			padding: .2rem 0;
			>div{
				padding: 0 .2rem;
				p{
					color: @subColor;
					span.order-act-pay{
						font-size: 0.36rem;
						color: @mainColor;
						font-weight: bold;
					}					
				}
				.order-pay-btn{
					display: inline-block;
					width: 100%;
					background: @mainColor;
					color: #fff;
					font-size: 0.36rem;
					height: .7rem;
					line-height: .7rem;
					border-radius: .06rem;
					margin-top: .1rem;
				}
			}			
		}
	}
</style>