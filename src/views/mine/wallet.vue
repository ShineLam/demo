<template>
	<div class="wallet">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="wallet-total">
			<span>可用余额(元)</span>
			<p>90.00</p>
		</div>
		<div class="wallet-detail clearfix">
			<div class="pull-left wallet-detail-t">
				<p>总金额（元）</p>
				<span>90.00</span>
			</div>
			<div class="pull-right wallet-detail-r">
				<p>提现中的金额（元）</p>
				<span>90.00</span>
			</div>
		</div>
		<div class="wallet-padding">
			<a href="javascript: void(0)" class="common-btn">提&nbsp;&nbsp;现</a>
			<router-link class="wallet-charge-btn common-btn" to="/charge">充&nbsp;&nbsp;值</router-link>
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
				title: '零钱'
			}
	  	}
	}		
</script>
<style lang="less" scoped>
	@import "../../styles/common.less";
	.wallet{
		margin-top: 60px;
		.wallet-total{
			background: #fff;
			text-align: center;
			padding: 30px 0;
			span{
				font-size: 1.4rem;
				color: @altColor;
			}
			p{
				margin-top: 10px;
				font-size: 1.8rem;
				font-weight: bold;
			}
		}
		.wallet-detail{
			background: #fff;
			border-top: 1px solid #ddd;
			font-size: 1.4rem;
			color: @altColor;
			>div{
				width: 49%;
				text-align: center;
				padding: 5px 0;
			}
			>div.wallet-detail-t{
				border-right: 1px solid #ddd;
			}
		}
		.wallet-padding{
			margin: 20px 1.0rem;
			>a{				
				margin-bottom: 20px;				
			}
			a.wallet-charge-btn{
				background: #128FEC;
			}
		}
	}
</style>