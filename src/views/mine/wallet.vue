<template>
	<div class="wallet">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="wallet-total">
			<span>可用余额(元)</span>
			<p>90.00</p>
		</div>
		<div class="wallet-detail">
			<div class="wallet-detail-t">
				<p>总金额（元）</p>
				<span>90.00</span>
			</div>
			<div class="l-right wallet-detail-r">
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
		margin-top: 1.2rem;
		.wallet-total{
			background: #fff;
			text-align: center;
			padding: .6rem 0;
			span{
				color: @altColor;
			}
			p{
				margin-top: .2rem;
				font-size: 0.36rem;
				font-weight: bold;
			}
		}
		.wallet-detail{
			background: #fff;
			border-top: .02rem solid #ddd;
			color: @altColor;
			display: flex;
			font-size: .28rem;
			>div{
				flex: 1;
				text-align: center;
				padding: .2rem 0;
			}
			>div.wallet-detail-t{
				border-right: .02rem solid #ddd;
			}
		}
		.wallet-padding{
			margin: .4rem .2rem;
			>a{				
				margin-bottom: .4rem;
			}
			a.wallet-charge-btn{
				background: #128FEC;
			}
		}
	}
</style>