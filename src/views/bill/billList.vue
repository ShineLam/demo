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
					<div class="bill-title">
						<div class="bill-title-no">
							订单编号：
							<span>84584993400021</span>
						</div>
						<div class="bill-status">待发货</div>
					</div>
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
							 	<span class="">x<span>1</span></span>
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
			top: 1.2rem;
			width: 100%;
			position: fixed;
			background: #fff;			
			.bill-type{	
				padding: 0 .2rem;
				display: flex;
				.bill-type-item{
					flex: 1;
					text-align: center;
					>a{
						display: inline-block;
						color: @altColor;
						width: 100%;
						height: 100%;
						padding: .2rem 0;
					}
				}
				.bill-type-item.active{
					color: @mainColor;
					border-bottom: .06rem solid @mainColor;
				}
			}	
		}			
		.bill-content{
			margin-top: 2.4rem;
			font-size: .28rem;
			.bill-item{
				background: #fff;
				margin-bottom: .2rem;
				.bill-btn{
					text-align: right;
					padding: .2rem;
				}
				.bill-title{
					color: @altColor;
					padding: .2rem 0;
					margin: 0 .2rem;
					border-bottom: .02rem solid @lineColor;
					display: flex;
					.bill-status{
						color: @tipColor;
						flex: .3;
						text-align: right;
					}
					.bill-title-no{
						flex: 1;
					}
				}
				.order-main{
					padding: .2rem .2rem 0;
					color: @altColor;
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
							margin-bottom: .2rem;
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
	}
</style>