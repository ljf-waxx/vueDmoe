<template>
  <div>
    <van-nav-bar title="全部品牌" height="40px" @click-right="goSearch">
      <van-icon name="search" slot="right" @click="goSearch" />
    </van-nav-bar>
    <!-- <van-row>
      <van-col span="12">
        <img src="../assets/img/brand1.jpg" alt />
      </van-col>
      <van-col span="12">
        <img src="../assets/img/brand2.jpg" alt />
      </van-col>
    </van-row>-->

    <van-row>
      <van-col span="12" v-for="index in picList" :key="index">
        <img :src="index" alt />
      </van-col>
    </van-row>

    <van-divider>全部品牌</van-divider>

    <!-- list-pic -->

    <!-- select tool -->
    <!-- <van-index-bar  >
      <van-index-anchor index="A" />
      <van-cell title="APM MONACO" />
      <van-cell title="A.H.C爱和纯" />
      <van-cell title="ANNA SUI安娜苏" />
      <van-cell title="Ascara阿卡兰" />
      <van-cell title="ATELIER COLOGNE 欧珑" />
      <van-cell title="Avene 雅漾" />

      <van-index-anchor index="B" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />

      <van-index-anchor index="C" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />

       <van-index-anchor index="D" />
      <van-cell title="benefit贝玲妃" />
      <van-cell title="BIOTHERM 碧欧泉" />
      <van-cell title="BOBBI BROWN 苗比波朗" />
      <van-cell title="BRAUN 博朗" />
      <van-cell title="Breo倍轻松" />
      <van-cell title="BURBERRY 博柏利" />
      <van-cell title="BVLGARI 宝格丽" />
    </van-index-bar>-->

    <!-- select tool end-->
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="c" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="d" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="e" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="f" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="g" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />...
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar, IndexAnchor } from "vant";
export default {
  data() {
    return {
      name: "cityList",
      sticky: true,
      highlightColor:'red',	
      index:1,
      picList: [
        require("../assets/img/brand1.jpg"),
        require("../assets/img/brand2.jpg"),
        require("../assets/img/brand3.jpg"),
        require("../assets/img/brand4.jpg"),
        require("../assets/img/brand5.jpg"),
        require("../assets/img/brand6.jpg"),
        require("../assets/img/brand7.jpg"),
        require("../assets/img/brand8.jpg"),
        require("../assets/img/brand9.jpg"),
        require("../assets/img/brand10.jpg")
      ],
      indexList: []
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/search");
    }
  },
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
.van-col--12 {
  padding: 4px;
}
.van-nav-bar {
  line-height: 2.5rem;
  height: 2.5rem;
}
</style>
