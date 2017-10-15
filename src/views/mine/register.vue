<template lang="html">
  <div class="register">
    <nav-title :title="title" :showHome="false" :showMine="false"></nav-title>
    <div class="wrap">
      <div class="reg-step" v-if="!regNext">
        <p>我们将发送验证码到你的手机</p>
        <div class="reg-step-form">
          <label for="">手机号</label>
          <input type="text" name="" value="" placeholder="请填写注册手机号">
        </div>
        <div class="login-btn">
          <button type="button" name="button" @click="regNext = true">下一步</button>
        </div>
        <div class="reg-step-sub">
          已有账号？
          <button type="button" name="button" @click="goto('login')">登陆</button>
        </div>
      </div>
      <div class="reg-step" v-if="regNext">
        <p>验证短信已发送至</p>
        <div class="reg-step-form">
          <label for="">验证码</label>
          <input type="text" name="" value="" placeholder="短信验证码">
          <a href="#">获取验证码</a>
        </div>
        <div class="reg-step-form">
          <label for="">设置密码</label>
          <input type="text" name="" value="" placeholder="6-20位字母、数字组合">
        </div>
        <div class="login-btn reg-second-step-sub">
          <button type="button" name="button">注册</button>
          <p>注册即视为同意《<a>服务条款</a>》、《<a>隐私条款</a>》等</p>
        </div>
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

<style lang="less">
@import "../../styles/common.less";
.reg-step {
  &>p {
    font-size: .20rem;
    color: @tipColor;
    margin: 70px 0 8px 12px;
  }
  .reg-step-form {
    background: #FFF;
    padding: 8px;
    label {
      margin-right: 6px;
    }
    label, input {
      font-size: .28rem;
    }
    & + .reg-step-form {
      border-top: 1px solid #EBEBEB;
    }
  }
  .login-btn {
    padding: 0 12px;
    font-size: .24rem;
    margin-bottom: 12px;
  }
  .reg-step-sub {
    font-size: .2rem;
    color: @tipColor;
    text-align: right;
    padding: 0 12px;
    button {
      color: #FFF;
      background: @mainColor;
      padding: 1px 8px;
      border-radius: 2px;
    }
  }
  .reg-second-step-sub {
    p {
      text-align: left;
      color: @tipColor;
      margin-top: 12px;
      a {
        color: @textColor;
      }
    }
  }
}
</style>
