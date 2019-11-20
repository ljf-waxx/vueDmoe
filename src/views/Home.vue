<template>
  <div>
    <van-row class="wrapper-top">
      <van-col span="5" class="top-left">
        <!-- <img src="../assets/img/logo.png" alt=""> -->
      </van-col>
      <van-col span="19">
        <form action="/" class="search">
          <van-search
            v-model="value"
            placeholder="搜索：分类 品牌 系列 商品"
            show-action:true
            input-align:center
            background="#b81c22"
          />
        </form>
      </van-col>
      <!-- header end -->
    </van-row>
    <!-- swiper  -->
    <van-swipe :autoplay="3000" indicator-color="#4079ce" class="swiper">
      <van-swipe-item>
        <img src="../assets/img/banner1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/banner4.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- swiper end -->
    <van-notice-bar
      background="#333"
      color="#fff"
      text="三亚、海口、博鳌机场、海口轮渡、海口火车站提货"
      left-icon="volume-o"
    />

    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        icon="https://pic.cdfgsanya.com/assets/upload/img/03deae7c51a68e9272490b4e001034b2.png"
        text="排行榜"
      />
      <van-grid-item icon="todo-list-o" text="我的订单" />
      <van-grid-item icon="balance-pay" text="优惠劵" />
      <van-grid-item icon="after-sale" text="购物流程" />
      <van-grid-item icon="contact" text="常见问题" />
      <!-- <span class="iconfont  icon-6"></span> -->
    </van-grid>
    <!-- 宫格 end -->
    <!-- pic -->
    <van-row>
      <van-col span="12" style="padding-right:4px">
        <img src="../assets/img/pic1.jpg" alt />
      </van-col>
      <van-col span="12" style="padding-left:4px">
        <img src="../assets/img/pic3.jpg" alt />
      </van-col>
      <van-col span="24" class="pic-bot">
        <img src="../assets/img/pic2.jpg" alt />
      </van-col>
    </van-row>
    <!-- pic  end-->
    <!-- 特卖 -->
    <plateNav :plateDatas="plateData"></plateNav>
    <bannerLiner :lists="list"></bannerLiner>

    <plateNav :plateDatas="plateData1"></plateNav>
    <bannerLiner :lists="list1"></bannerLiner>

    <plateNav :plateDatas="plateData2"></plateNav>
    <bannerLiner :lists="list2"></bannerLiner>

    <plateNav :plateDatas="plateData3"></plateNav>
    <bannerLiner :lists="list3"></bannerLiner>
    <plateNav :plateDatas="plateData4"></plateNav>
    <plateNav :plateDatas="plateData5"></plateNav>
    <plateNav :plateDatas="plateData6"></plateNav>
    <plateNav :plateDatas="plateData7"></plateNav>
    <plateNav :plateDatas="plateData8"></plateNav>
  </div>
</template>

<script>
import "../assets/font/iconfont.css";
import bannerLiner from "../components/bannerLiner";
import plateNav from "../components/plate-nav";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: { bannerLiner, plateNav },
  computed: {
    ...mapState({
      plateData: state => state.bannerLiner.navplate,
      list: state => state.bannerLiner.list,
      plateData1: state => state.bannerLiner.navplate1,
      list1: state => state.bannerLiner.list1,
      plateData2: state => state.bannerLiner.navplate2,
      list2: state => state.bannerLiner.list2,
      plateData3: state => state.bannerLiner.navplate3,
      list3: state => state.bannerLiner.list3,
      plateData4: state => state.bannerLiner.navplate4,
      plateData5: state => state.bannerLiner.navplate5,
      plateData6: state => state.bannerLiner.navplate6,
      plateData7: state => state.bannerLiner.navplate7,
      plateData8: state => state.bannerLiner.navplate8
    })
  },
  created() {
    console.log(this.$store.state);
  }
};
</script>

<style lang="less" scoped>
.wrapper-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #b81c22;
  height: 44px;
  overflow: hidden;
}
.swiper {
  margin-top: 44px;
  overflow: hidden;
  height: 10rem;
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
  height: 13.5rem;
  display: block;
  font-size: 0;
}
.van-notice-bar {
  font-size: 12px !important;
  height: 1.8rem !important;
}
.pic-bot {
  margin: 6px 0px 0px 0px;
}
.year {
}
</style>
