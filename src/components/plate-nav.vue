<template>
  <div>
    <div class="year" v-for="(value, i) in plateDatas" :key="i">
      <div class="top">
        <van-divider style="font-size:16px;height:15px;">{{
          value.title
        }}</van-divider>
      </div>
      <div class="pic-box">
        <img :src="value.path" alt />
      </div>
      <!-- {{plateDatas}} -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["plateDatas"]
};
</script>

<style lang="less" scoped>
.wrapper-top {
  background-color: #b81c22;
  height: 44px;
  overflow: hidden;
}
.swiper {
  overflow: hidden;
  // margin-bottom: 1px;
}
.van-search {
  // padding: 0px;
  padding: 0.3125rem 0.9375rem 0px 0px;
}
.top-left {
  height: 100%;
  background: url(../assets/img/logo.png) no-repeat center;
  background-size: 75% 75%;
}

img {
  width: 100%;

  display: block;
}
.van-notice-bar {
  font-size: 12px !important;
  height: 1.8rem !important;
}
.pic-bot {
  margin: 6px 0px;
}
.year {
  border-top: #eee 0.625rem solid;
}
</style>
