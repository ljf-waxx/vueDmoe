<template>
  <div style="padding-top:50px">
    <van-nav-bar
      title="账户安全"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>

    <van-row style="padding-top:2rem;  border-bottom:10px solid #f7f7f7;">
      <van-col span="1"></van-col>
      <van-col span="21">
        <div class="info-left">
          <span class="info-title">修改登录密码</span>
          <p class="info-text">*建议您定期更改密码以保护账户安全</p>
        </div>
      </van-col>
      <van-col span="1">
        <br />
        <van-icon name="arrow" />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="padding-top:2rem; border-bottom:10px solid #f7f7f7;">
      <van-col span="1"></van-col>
      <van-col span="21">
        <div class="info-left">
          <span class="info-title">手机验证</span>
          <p class="info-text">*若您的验证手机已丢失或停用，请立即修改更换<span style="color:#b81c22;">177*****5392</span></p>
        </div>
      </van-col>
      <van-col span="1">
        <br />
        <van-icon name="arrow" />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.info-left {
  font-size: 14px;
  line-height: 14px;
  color: #666;
  .info-text {
    font-size: 12px;
  }
}
</style>