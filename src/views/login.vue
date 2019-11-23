<template>
  <div>
    <van-nav-bar title="用户登录" height="40px">
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-button type="primary" size="large" @click="loginto">登录</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    loginto() {
      this.$axios
        .get("http://192.168.54.65:3000/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          if (response.data.code == 201) {
            Toast("登录失败");
            // alert('失败')
          } else {
            console.log(response);
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push("/my");
          }
        })
        .catch(error => {
          console.log(error, "失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
