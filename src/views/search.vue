<template>
  <div>
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow @click-left='goUp'>
      <van-search placeholder="请输入搜索关键词"  />
      <van-icon name="search" slot="right" />
    </van-nav-bar> -->

    <van-row>
  <!-- <van-col span="2">span: 8</van-col> -->
  <van-col span="24">
    <form action="/">
  <van-search
    placeholder="请输入搜索关键词"
    show-action
    @cancel="goUp"
  />
<van-row style="padding:20px 0px">
  <van-col span="1"></van-col>
  <van-col span="22">
    <h3 style="font-size:14px; color:#999; text-align:center;">热门搜索</h3>
    <van-row class="searText" style="text-align:center; display:block;">
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col>
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col>
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col> 
</van-row>
<van-row class="searText" style="text-align:center; display:block;">
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col>
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col>
  <van-col  class="text-bar" span="8"> <span class="text">化妆品</span></van-col>
</van-row>
  </van-col>
  <van-col span="1"></van-col>
</van-row>

</form>
  </van-col>
  <!-- <van-col span="2">span: 8</van-col> -->
</van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    }
  },
  methods: {
    goUp() {
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="less" scoped>
.searText{
 padding: 10px; 
 span.text{
   display: block;
   background:#eee;
   margin: 0px 10px;
   border-radius: 4px;
   padding: .625rem;
   font-size: .625rem;
  color: #666;
 }
}
</style>