<!-- 头部组件 -->
<template>
	<div class="nav-title clearfix">
		<div class="nav-box">
			<div class="nav-left">
				<a href="javascript:void(0)" onclick="window.history.go(-1)" class="left-arrow"></a>
			</div>
			<div class="title">{{title}}</div>
			<div class="nav-right">
				<router-link to="/home" v-show="showHome" class="icon-home"></router-link>
				<router-link to="/mine" v-show="showMine" class="icon-mine"></router-link>
			</div>
		</div>		
	</div>
</template>

<script>
	import { TransferDom, Popup} from 'vux'
	  export default{
	    props: {
	      title: '',
	      showMine: '',
	      showHome: ''
	    },
	    directives: {
		    TransferDom
		  },
	    components: {
	      TransferDom,
	      Popup
	    },
	    data () {
	    	return {
	        show:false
	    	}
	    }
  }
</script>
<style lang="less" scoped>

</style>