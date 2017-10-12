import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/home' // 首页
import Order from '../views/product/order.vue' // 产品下单
import Mine from '../views/mine/mine.vue' // 个人中心
import Wallet from '../views/mine/wallet.vue' // 零钱
import Charge from '../views/mine/charge.vue' // 充值
import BillList from '../views/bill/billList.vue' // 订单列表
import BillDetail from '../views/bill/billDetail.vue' // 订单详情
import Login from '../views/mine/login.vue' // 登陆
import Register from '../views/mine/register.vue' // 注册

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    // keepAlive 控制缓存
    // hideFooterNav 控制底部显示
    { path: '/', name: 'Home', meta: { keepAlive: true, title: '首页' }, component: Home },
    { path: '/order', name: 'Order', meta: { keepAlive: true, title: '产品下单' }, component: Order },
    { path: '/mine', name: 'Mine', meta: { keepAlive: true, title: '个人中心' }, component: Mine },
    { path: '/wallet', name: 'Wallet', meta: { keepAlive: true, title: '零钱' }, component: Wallet },
    { path: '/charge', name: 'Charge', meta: { keepAlive: true, title: '充值' }, component: Charge },
    { path: '/billList', name: 'BillList', meta: { keepAlive: true, title: '订单列表' }, component: BillList },
    { path: '/billDetail', name: 'BillDetail', meta: { keepAlive: true, title: '订单详情' }, component: BillDetail},
    { path: '/login', name: 'login', meta: { keepAlive: true, title: '登陆' }, component: Login },
    { path: '/register', name: 'register', meta: { keepAlive: true, title: '手机注册' }, component: Register },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
export default router
