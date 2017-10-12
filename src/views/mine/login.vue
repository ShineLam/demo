<template lang="html">
  <div class="login">
    <div class="logo">

    </div>
    <div class="login-form">
      <div class="login-input">
        <input type="text" name="" value="" placeholder="用户名／绑定手机／绑定邮箱">
      </div>
      <div class="login-input">
        <input type="password" name="" value="" placeholder="登陆密码">
      </div>
      <div class="forget-pwd">
        <a href="#">忘记密码?</a>
      </div>
      <div class="login-btn">
        <button type="button" name="button">登陆</button>
      </div>
      <divider>或</divider>
      <div class="login-quick-btn">
        <button type="button" name="button">手机号快捷登陆</button>
      </div>
    </div>
    <div class="login-bottom">
      <a href="#">微信登陆</a><span>|</span><a href="#">免费注册</a>
    </div>
  </div>
</template>

<script>
import {
  Divider
} from 'vux'
export default {
  components: {
    Divider
  }
}
</script>

<style lang="less">
@import "../../styles/common.less";
body {
  background: #FFF;
}
.login-form {
  font-size: .24rem;
  padding: 0 12px;
  .login-input {
    input {
      width: 100%;
      padding: 3px;
      border-bottom: 1px solid #DBDBDB;
    }
    &+.login-input{
      margin-top: 12px;
    }
  }
  .forget-pwd {
    text-align: right;
     a {
       font-size: .2rem;
       color: #CCC;
     }
  }
  .login-btn {
    button {
      width: 100%;
      height: 40px;
      letter-spacing: 3px;
      color: #FFF;
      border-radius: 3px;
      background: @mainColor;
    }
  }
  .vux-divider {
    font-size: .2rem;
    color: #EBEBEB;
  }
  .login-quick-btn {
    text-align: center;
    button {
      width: 40%;
      height: 30px;
      font-size: .2rem;
      padding: 3px;
      border: 1px solid @mainColor;
      border-radius: 3px;
      color: @mainColor;
    }
  }
}
.login-bottom {
  font-size: .24rem;
  text-align: center;
  a {
    color: #999;
  }
  span {
    display: inline-block;
    margin: 0 12px;
    color: #DBDBDB;
  }
}
</style>
