<!-- 分类推荐 -->
<template>
  <div class="classify">
    <popup v-model="showS" position="top">
      <ul class="classify-list-content">
        <li v-for="(item, index) in condition"
            @click="onSort(item, index)"
            :class="{active: flag == index}">
          <div>
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </popup>
  </div>
</template>
<script>
  import { Popup } from 'vux'
  export default {
  	components: {
      Popup
   	},
    props: {
      showSort: false
    },
    data () {
      return {
        flag: 0,
        showS: this.showSort,
        // 排序条件
        condition: [{
          key: 1,
          name: '默认'
        }, {
          key: 2,
          name: '价格 低-高'
        }, {
          key: 3,
          name: '价格 高-低'
        }, {
          key: 4,
          name: 'A级景区 低-高'
        }, {
          key: 5,
          name: 'A级景区 高-低'
        }, {
          key: 6,
          name: '最新上架'
        }],
        sortTerm: {
          sort: '',
          reset: this.reset
        }
      }
    },
    watch: {
    	'showSort' (v) {
        this.showS = v
      },
      'showS' (v) {
        this.$emit('on-show-sort-change', v)
      }
    },
    methods: {
      onSort (item, index) {
        this.flag = index
        this.showS = false
        this.sortTerm.sort = item
      },
      reset () {
      }
    }
  }
</script>
<style lang="less" scoped>
	@import '../styles/common.less';
	.classify{
		.vux-popup-top{
			top: 96px;
		}
		.classify-list-content{
			background: #fff;
			>li{
				display: block;
		    text-align: center;
		    border-bottom: 1px solid #dbdbdb;
		    padding: 12px 0;
		    position: relative;
		    color: @subColor;
		    font-size: 1.4rem;
			}
			>li.active{
				color: @mainColor;
			}
		}
	}
</style>
