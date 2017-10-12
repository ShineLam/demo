<template>
	<div class="bill">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="bill-type-box">
			<ul class="bill-type clearfix">
				<li class="bill-type-item" v-for="(tab, idx) in tabList" 
					:class="tabIndex == idx ? 'active' : '' ">
					<a href="javascript: void(0)" @click="getBill(idx)">{{tab}}</a>
				</li>				
			</ul>
		</div>
		<ul class="bill-content">
			<li v-for="item in 4" class="bill-item">
				<router-link to="/billDetail">
					<div class="bill-title clearfix">
						<div class="pull-left">
							订单编号：
							<span>84584993400021</span>
						</div>
						<div class="pull-right bill-status">待发货</div>
					</div>
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
				</router-link>				
				<div class="bill-btn">
					<router-link to='/' class="btn btn-primary">再次购买</router-link>
					<router-link to='/' class="btn btn-general">去支付</router-link>
				</div>
			</li>
		</ul>		
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
				title: '产品预订',
				tabIndex: 0,
				tabList: ['待付款', '待收货', '全部']
			}
	  },
	  methods: {
	  	getBill (index){
	  		const vm = this
	  		vm.tabIndex = index
	  	}
	  }
	}	
</script>
<style lang="less" scoped>
	@import "../../styles/common.less";
	.bill{		
		.bill-type-box{
			top: 56px;
			width: 100%;
			position: fixed;
			background: #fff;
			.bill-type{	
				padding: 0 1.0rem;			
				.bill-type-item{
					float: left;
					width: 33%;
					text-align: center;
					height: 4rem;
					line-height: 4rem;
					>a{
						display: inline-block;
						font-size: 1.4rem;
						color: @altColor;
						width: 100%;
						height: 100%;
					}
				}
				.bill-type-item.active{
					color: @mainColor;
					border-bottom: .3rem solid @mainColor;
				}
			}	
		}			
		.bill-content{
			margin-top: 120px;
			.bill-item{
				background: #fff;
				margin-bottom: 1.0rem;
				.bill-btn{
					text-align: right;
					padding: 1.0rem;			
					>a{
						font-size: 1.4rem;
					}
				}
				.vux-swiper-item{
					img{
						width: 100%;
						height: 100%;
					}
				}
				
				.bill-title{
					color: @altColor;
					padding: 1.0rem 0;
					font-size: 1.4rem;
					margin: 0 1.0rem;
					border-bottom: 1px solid @lineColor;
					.bill-status{
						color: @tipColor;
					}
				}
				.order-main{
					padding: 1.0rem 1.0rem 0;
					color: @altColor;
					.order-img{
						width: 30%;
						height: 80px;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.order-detail{
						width: 67%;
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
						}
						.order-vender{
								font-size: 1.2rem;
								color: @tipColor;
							}				
					}
				}		
			}
		}				
	}
</style>