<template>
  <div class>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="../assets/img/swiper1.jpg"
            class="animated zoomDown"
            v-show="isshow"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/img/swiper2.jpg"
            class="animated slideInUp"
            v-show="isshow"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="../assets/img/swiper3.jpg"
            class="animated zoomIn"
            v-show="isshow"
            alt
          />
        </div>
        <div class="swiper-slide wrapper">
          <van-button type="primary" class="btn animated zoomIn" @click="go"  
            >立即开启</van-button
          >

          <img src="../assets/img/swiper4.jpg" class="animated zoomIn"  alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate";
import swiper from "swiper";
export default {
  data() {
    return {
      isshow: true
    };
  },
  methods: {
    go() {
      this.$router.push("/gg");
    }
  },
  mounted() {
    let _this = this;
    new swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: function() {
          _this.isshow = false;
        },
        slideChangeTransitionEnd: function() {
          _this.isshow = true;
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 100%;
}

img {
  font-size: 0;
  display: block;
  width: 100%;
}
.wrapper {
  position: relative;
  .btn {
    position: absolute;
    bottom: 12%;
    left: 50%;
    width: 120px;
    margin-left: -60px;
    z-index: 6666;
  }
}
</style>
