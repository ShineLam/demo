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
		margin-top: 60px;
		.charge-method{
			background: #fff;
			padding: 10px 1.0rem;
			margin-bottom: 10px;
			a{
				color: @altColor;
				width: 100%;
				display: inline-block;
			}
		}
		.charge-input{
			background: #fff;
			padding: 10px 0;			
			>input{
				border: 0;
				outline: 0;
				font-size: 1.4rem;
			}
			>label{
				font-size: 1.6rem;
				float: left;
				margin-right: 1.0rem;
				padding-left: 1.0rem;
				color: @altColor;
			}
		}
		.charge-next-box{
			margin-top: 10px;
			padding: 1.0rem;
			button{
				width: 100%;
				padding: 12px 0;
				background: #128FEC;
			}
		}
	}
</style>