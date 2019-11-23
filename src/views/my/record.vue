<template>
  <div style="padding-top:44px">
    <van-nav-bar
      :title="$router.history.current.name"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>

  <!-- {{$router}} -->

    <div>
      <!-- <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      /> -->
      <van-card
      v-for="(value,i) in list" :key="i"
        :num="value.num <= 0 ? 1 : value.num"
        :price="value.price"
        :desc="value.tip"
        :title="value.title"
        :thumb="value.path"
        @click="$router.push(`/buying?index=${i}`)"
      />
    </div>
    <!-- {{list}} -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      list: state => state.bannerLiner.list
    })
  },
  created(){
    console.log(this.$router.history.current.name)
  }
};
</script>

<style lang="scss" scoped>
</style>