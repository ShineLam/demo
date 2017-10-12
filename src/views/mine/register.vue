<template lang="html">
  <div class="register">
    <nav-title :title="title" :showHome="false" :showMine="false"></nav-title>
    <div class="" v-if="!regNext">
      <p>我们将发送验证码到你的手机</p>
      <div class="">
        <label for="">手机号</label>
        <input type="text" name="" value="" placeholder="请填写注册手机号">
      </div>
      <div class="">
        <button type="button" name="button" @click="regNext = true">下一步</button>
      </div>
      <div class="">
        已有账号？
        <button type="button" name="button" @click="goto('login')">登陆</button>
      </div>
    </div>
    <div class="" v-if="regNext">
      <p>验证短信已发送至</p>
      <div class="">
        <label for="">验证码</label>
        <input type="text" name="" value="" placeholder="短信验证码">
        <a href="#">获取验证码</a>
      </div>
      <div class="">
        <label for="">设置密码</label>
        <input type="text" name="" value="" placeholder="6-20位字母、数字组合">
      </div>
      <div class="">
        <button type="button" name="button">注册</button>
        <p>注册即视为同意《<a>服务条款</a>》、《<a>隐私条款</a>》等</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTitle from '../../components/navtitle.vue'

export default {
  data () {
    return {
      title: '手机注册',
      regNext: false,
    }
  },
  components: {
    NavTitle
  }
}
</script>

<style lang="css">
</style>
