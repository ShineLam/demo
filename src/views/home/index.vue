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
						<div class="pro-detail clearfix">
							<span class="pro-out pull-right">剩5天</span>
							<p class="pro-name">全场210元起 雅漾舒护活泉喷雾300ml</p>
						</div>
						<p class="pro-intro">增强肌肤耐受性，降低敏感度</p>
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
				margin-top: 106px;
			}
			ul.pop-pro-type{
				>li{
					float: left;
					width: 25%;
					text-align: center;
				}
			}
		}
		.home-pro-type{
			z-index: 1000;
			position: fixed;
			top: 50px;
			left: 0;
			background: #fff;
			width: 100%;
			.classify{
				float: left;
				width: 90%;
				.classify-tip-box{
					height: 50px;
					line-height: 50px;
					color: @tipColor;
					font-size: .28rem;
					padding-left: .10rem;
				}
				ul.home-classify-box{
					height: 50px;
	  				position: relative;
	  				width: 480px;
					>li{
						width: 60px;
						height: 50px;
						display:inline-block;
						float: left;
						text-align: center;
						line-height: 50px;
						>a{
							color: @altColor;
							font-size: .28rem;
						}
					}
				}
			}
			.toggle{
				width: 10%;
				height: 50px;
				line-height: 50px;
				text-align: center;
				>a{
					color: @altColor;
				}
			}
		}
		ul.home-pro-content{
			margin-top: 100px;
			.pro-item{
				margin-bottom: 10px;
				background: #fff;
				.pro-img-box{
					height: 150px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.pro-info-box{
					padding: 10px .10rem;
					.pro-detail{
						.pro-out{
							font-size: .24rem;
							color: @tipColor;
						}
						.pro-name{
							color: @titleColor;
							font-size: .28rem;
							font-weight: bold;
						}
					}
					.pro-intro{
						color: @textColor;
						font-size: .24rem;
					}
				}
			}
		}
	}
	.pop-pro-type{
		background: #fff;
		border-top: 1px solid @lineColor;
		li{
			float: left;
			width: 24%;
			text-align: center;
			padding: 1.0rem 0;
			>a{
				font-size: .28rem;
				color: @altColor;
			}
		}
	}
</style>
