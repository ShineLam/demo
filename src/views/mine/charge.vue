<template>
	<div class="charge">
		<nav-title :title="title" :showHome="true" :showMine="true"></nav-title>
		<div class="charge-method">
			<a href="javascript:void(0)" class="right-arrow">微信</a>
		</div>
		<div class="charge-input">
			<label>充值金额</label>
			<input type="text" placeholder="请输入充值金额"/>
		</div>
		<div class="charge-next-box">
			<button class="common-btn">下一步</button>
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
				title: '充值'
			}
	  	}
	}			
</script>
<style lang="less" scoped>
	@import "../../styles/common.less";
	.charge{
		margin-top: 1.2rem;
		.charge-method{
			background: #fff;
			padding: .2rem;
			margin-bottom: .2rem;
			a{
				color: @altColor;
				width: 100%;
				display: inline-block;
			}
		}
		.charge-input{
			background: #fff;
			padding: .2rem 0;
			>input{
				border: 0;
				outline: 0;
			}
			>label{
				font-size: .34rem;
				float: left;
				margin-right: .2rem;
				padding-left: .2rem;
				color: @altColor;
			}
		}
		.charge-next-box{
			margin-top: .2rem;
			padding: .2rem;
			button{
				width: 100%;
				padding: .24rem 0;
				background: #128FEC;
			}
		}
	}
</style>