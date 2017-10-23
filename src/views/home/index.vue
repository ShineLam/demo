<template>
	<div class="home">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="home-pro-type clearfix">
			<div class="classify">
				<scroller lock-y :scrollbar-x=false v-show="!show">
			      	<ul class="clearfix home-classify-box">
						<li v-for="(item, idx) in classifyList">
							<a href="javascript: void(0)">{{item}}</a>
						</li>
					</ul>
			    </scroller>
			    <div v-show="show" class="classify-tip-box">请选择</div>
			</div>
			<div class="pull-right toggle" @click="show = !show" >
				<a href="javascript:void(0)" :class="!show? 'arrow' : 'rearrow'"></a>
			</div>
		</div>
		<ul class="home-pro-content">
			<li class="pro-item" v-for="item in 5">
				<router-link to="/order">
					<div class="pro-img-box">
						<img src="../../assets/home/goods1.jpg" alt="" />
					</div>
					<div class="pro-info-box">
						<div class="pro-detail">							
							<p class="pro-name">全场210元起 雅漾</p>
							<span class="pro-out">剩5天</span>
						</div>
						<p class="pro-intro">增强肌肤耐受性，降低度</p>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="home-popup-box">
	      	<popup v-model="show" position="top">
			    <ul class="clearfix pop-pro-type">
					<li v-for="(item, idx) in classifyList">
						<a href="javascript: void(0)">{{item}}</a>
					</li>
				</ul>
	      	</popup>
	  </div>
	</div>
</template>
<script>
	import NavTitle from '../../components/navtitle.vue'
	import { Scroller, TransferDom, Popup} from 'vux'
	export default {
		components: {
			NavTitle,
			TransferDom,
      		Popup,
      		Scroller
		},
		directives: {
	    	TransferDom
	  	},
		data () {
			return {
				title: '首页',
				show:false,
				classifyList: ['今日推荐','时尚盛典','国际','美妆',
				'母婴','居家','生活','即将上线']
			}
	  	}
	}
</script>
<style lang="less" scoped>
@import "../../styles/common.less";
	.home{
		.home-popup-box{
			.vux-popup-top{
				margin-top: 1.9rem;
			}
			.pop-pro-type{
				background: #fff;
				border-top: .02px solid @lineColor;
				li{
					float: left;
					width: 25%;
					text-align: center;					
					>a{
						width: 100%;
						height: 100%;
						padding: .4rem 0;
						display: inline-block;
						font-size: .28rem;
						color: @altColor;
					}
				}
			}
		}		
		.home-pro-type{
			z-index: 1000;
			position: fixed;
			top: 1rem;
			left: 0;
			background: #fff;
			width: 100%;
			.classify{
				float: left;
				width: 90%;
				padding-left: .2rem;
				.classify-tip-box{					
					color: @tipColor;
					padding: .2rem 0;
					font-size: .28rem;
				}
				ul.home-classify-box{					
	  				position: relative;
	  				width: 9.6rem;
	  				display: flex;
					>li{
						flex: 1;
						display:inline-block;
						text-align: center;
						padding: .2rem 0;
						max-width: 1.2rem;
						>a{
							color: @altColor;
							font-size: .28rem;
						}
					}
				}
			}
			.toggle{
				width: 10%;
				text-align: center;
				padding: .2rem 0;
			}
		}
		ul.home-pro-content{
			margin-top: 2rem;
			.pro-item{
				margin-bottom: .2rem;
				background: #fff;
				.pro-img-box{
					height: 3rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.pro-info-box{
					padding: .2rem .2rem;
					.pro-detail{
						display: flex;
						line-height: .48rem;
						.pro-out{
							font-size: .28rem;
							color: @tipColor;
							flex: .2;
						}
						.pro-name{
							flex: 1;
							font-size: .30rem;
							color: @titleColor;
							font-weight: bold;
						}
					}
					.pro-intro{
						color: @textColor;
						font-size: .28rem;
					}
				}
			}
		}
	}	
</style>
