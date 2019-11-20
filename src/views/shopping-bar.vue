<template>
  <div>
    <div v-if="display">
      <van-nav-bar title="我的购物袋" heighe:2.5rem />
      <div class="br-bor"></div>
      <div
        class="warm-prompt ng-binding"
        ng-bind-html="ctrl.data.reminder[0]"
      >温馨提示 :三亚机场出发，至少于起飞前6小时完成购买；海口美兰、琼海博鳌机场、火车站出发，至少离岛前一天内完成购买，如有疑问，请致电400-699-6956。</div>
      <div class="box-bottom">
        <div class="tip">您的购物袋内还没有任何商品 ……</div>
        <span class="btn" @click="go">去逛逛</span>
      </div>
    </div>
    
    <!-- 购物车有数据时显示 -->
    <!-- {{ispushList}} -->
    <!-- {{listData[0].price}}
    {{listData[0].num}} -->
    <div v-if="!display">
      <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="go1" />
      <!-- <van-card
        v-for="(value,i) in listData"
        :key="i"
        :num="value.num"
        :price="value.price"
        :desc="value.tip"
        title="商品名称"
        :thumb="value.path"
      /> -->
        <van-card
        v-for="(value,i) in ispushList"
        :key="i"
        :num="listData[value].num"
        :price="listData[value].price"
        :desc="listData[value].tip"
        title="商品名称"
        :thumb="listData[value].path"
      />
      
      <van-submit-bar :price="price1" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      checked: 1,
      price: 1,
      display: true,
      dataList:[]

    };
  },
  methods: {
    go() {
      this.$router.push("/home");
    },
    go1() {
      this.$router.go(-1);
    },
    onSubmit() {}
  },
  created() {
    this.$store.commit('pushIndex', this.$route.query.index)
    console.log(this.ispushList.length);
    if (!this.ispush) {
      this.display = false;
    }
  },
  computed: {
    ...mapState({
      listData: state => state.bannerLiner.list,
      ispush: state => state.shoppingCar.ispush,
      ispushList : state => state.shoppingCar.ispushList
    }),
    price1:function(){
      var num = 0 ;
        for(var i=0 ; i<this.ispushList.length ; i++){
          num +=this.listData[i].price*this.listData[i].num*100
        }

      return num
    }
  },
  // watch:{
  //   ispushList : function(){
  //       // var num = 0 ;
  //       for(var i=0 ; i<this.ispushList.length ; i++){
  //        this.price +=this.listData[i].price*this.listData[i].num*100
  //       }
  //       // this.price = num
  //   }
  // }
  // store.commit('MUTATIONS', payload)
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  height: 2.5rem;
}
.br-bor {
  width: 100%;
  height: 1rem;
  background-color: #f7f7f7;
}
.warm-prompt {
  box-sizing: border-box;
  padding: 1.225rem;
  color: #666;
  font-size: 12px;
  background: url(../assets/img/shopping-bg.png) no-repeat center center;
  background-size: 80%;
  position: fixed;
  top: 2.8rem;
  bottom: 0;
  height: auto;
}
.box-bottom {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20%;
  > div {
    width: 100%;
  }
}
.btn {
  display: inline-block;
  height: 2.1875rem;
  line-height: 2.1875rem;
  color: #afadad;
  background-color: #b81c22;
  width: 80%;
  margin-top: 10px;
  border-radius: 0.375rem;
}
</style>
