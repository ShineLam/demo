require('es6-promise').polyfill()

import Vue from 'vue'

import {
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

import App from './App'
import router from './router'
import * as filters from './filters'
import FastClick from './plugins/fastclick'

import './plugins/rem'
import './styles/reset.css'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


// 路由跳转公用方法
Vue.prototype.goto = function (name, query) {
  this.$router.push({
    name: name,
    query: query || {}
  })
}

FastClick.attach(document.body)

new Vue({ router, ...App }).$mount('#app')
