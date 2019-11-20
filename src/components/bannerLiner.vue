<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(value, i) in lists" :key="i" @click="go(i)">
          <img :src="value.path" />
          <h3 class="title">{{ value.title }}</h3>
          <p class="tip">{{ value.tip }}</p>
          <p class="price">
            免税价：
            <span>{{ value.price }}</span>
          </p>
          <p class="priceNot">市场价：{{ value.priceNot }}</p>
        </div>
        <div class="swiper-slide ">
          <span class="more">查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  methods: {
    go(i) {
        this.$router.push({
          path:`/buying?index=${i}`
        })
    }
  },
  mounted() {
    
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  props: ["lists"]
};
</script>

<style lang="less" scoped>
.swiper-wrapper {
  // overflow: hidden;
  padding: 4px 0px;
}
.swiper-slide {
  width: 33.3% !important;
  text-align: center;
  margin: 0 !important;
  padding: 0px 10px;
  box-sizing: border-box;
  h3.title {
    font-weight: 500;
    font-size: 10px;
    padding: 0;
    line-height: 12px;
    color: #333;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tip {
    margin: 0;
    height: 18px;
    font-size: 12px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    white-space: nowrap;
  }
  .more {
    text-align: center;
    background-color: #eee;
    font-size: 14px;
    width: 100%;
    display: block;
    padding: 0;
    margin: 0;
    height: 10rem;
    line-height: 10rem;
  }
  .price {
    font-size: 10px;
    color: #666;
    padding: 0;
    margin: 0;
    line-height: 16px;
    span {
      color: #666;
    }
  }
  .priceNot {
    text-decoration: line-through;
    font-size: 10px;
    color: #ccc;
    margin: 0;
    padding: 0;
    line-height: 14px;
  }
}
img {
  width: 100%;
}
</style>
