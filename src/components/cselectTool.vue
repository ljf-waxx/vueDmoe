<template>
  <div>
    <div >
      <div class="pic">
        <img :src='list.showy' alt />
      </div>
      <van-row class="title">
        <van-col span="12" class="subTitle">{{list.title}}</van-col>
        <van-col span="12">
          <van-icon name="arrow" class="look" />
          <span class="look">查看全部</span>
        </van-col>
      </van-row>
       <van-grid :column-num="3" icon-size="60px" > 
        <van-grid-item
          :icon='value.path'
          :text="value.tip"
          v-for="(value,i) in list.listData" :key="i"
          @click="go(i)"
        /> 
        
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   items: [{ text: "分组 1" }, { text: "分组 2" }],
    //   activeId: 1,
    //   activeIndex: 0
    };
  },
  methods: {
    go(i) {
      this.$router.push({
        path:`/buying?index=${i}`
      })
    }
  },
  components:{

  },
  props:["list"]
};
</script>

<style lang="less" scoped>
.wrapper-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 44px;
  overflow: hidden;
}
.swiper {
  margin-top: 44px;
  overflow: hidden;
}
.van-search {
}
.top-left {
  padding: 8px;
  box-sizing: border-box;
}

img {
  width: 100%;
  display: block;
  font-size: 0;
}
.van-notice-bar {
  font-size: 12px !important;
  height: 1.8rem !important;
}
.van-tree-select {
  width: 100%;
}
.secletBox {
  padding: 0.5rem;
  box-sizing: border-box;
  .title {
    padding: 15px 4px;
    .subTitle {
      color: #666;
      font-size: 12px;
      font-weight: 400;
    }
    .look {
      color: #ff9b9f;
      font-size: 12px;
      float: right;
      display: block;
    }
  }
}
.van-col {
  line-height: 13px;
}
.van-tree-select__content{
  flex: 4;
}
.van-grid-item__icon {
  font-size: 2.75rem !important;
}
</style>