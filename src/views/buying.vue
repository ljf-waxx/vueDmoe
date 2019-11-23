<template>
  <div style="padding-bottom:60px; padding-top:45px;">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="go" class="top-bar" />
    <div class="top-banner">
      <img :src="list[$route.query.index].path" alt width="100%" />
    </div>
    <div class="product-info">
      <span class="price-up">
        <small>￥</small>
        {{list[$route.query.index].price}}
      </span>
      <span class="price-down">
        <small>￥</small>
        {{list[$route.query.index].priceNot}}
      </span>
      <h3 class="title2">{{list[$route.query.index].tip}}</h3>
    </div>
    <!-- {{list[$route.query.index].num}} -->
    <!-- <h3>index={{$route.query.index}}</h3>1 -->

    <van-row class="cell-box">
      <van-col span="22">
        <span>促销</span>
        <span class="cell-text">&nbsp;&nbsp;[7折] &nbsp;&nbsp;&nbsp;莱珀妮单品专享7折</span>
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" />
      </van-col>

      <van-col span="1">
        <!-- <van-icon name="arrow" /> -->
      </van-col>
      <van-col span="21" style="font-size:12px">
        <p>三亚: 三亚凤凰机场离岛，至少提前6小时下单</p>
        <p>海口: 海口美兰机场离岛，至少提前1天下单</p>
        <p>注：购买时间视下单时段而定，具体说明请查看详情。</p>
      </van-col>
      <van-col span="2">
        <br />
        <br />
        <br />
        <van-icon name="arrow" />
      </van-col>

      <van-col span="24" style="height:26px"></van-col>


<van-col span="24" style="padding:0px 0px 15px 0px;">
   <van-col span="22">
        <span>促销</span>
        <span class="cell-text">&nbsp;&nbsp;[7折] &nbsp;&nbsp;&nbsp;莱珀妮单品专享7折</span>
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" />
      </van-col>
</van-col>
     
    </van-row>

    <!-- 底部banner -->
    <van-tabs v-model="active" style="border-top:14px solid #eee;">
      <van-tab title="相关搭配推荐">

       <!-- <banenrLiner ></banenrLiner> -->
         <bannerLiner :lists="list1"></bannerLiner>

      </van-tab>
      <van-tab title="同类热销排行">
        <bannerLiner :lists="list"></bannerLiner>
      </van-tab>
    </van-tabs>

    <!-- 底部banner end -->

    <!-- 底部 -->
    <van-goods-action class="pad">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="gobuy($route.query.index)"  :info="list[key].num" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="gobuy($route.query.index)" />
    </van-goods-action>
  </div>
</template>

<script>
import banenrLiner from '../components/bannerLiner'
import { mapState } from "vuex";
export default {
  data() {
    return {
      key: this.$route.query.index,
      ischecked: this.ispush,
      active:1
    };
  },
  components:{
    bannerLiner:banenrLiner
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    gobuy(index) {
      if (this.ispushList.length >= 0) {
        this.$store.state.shoppingCar.lists.push(this.list[index]);
        this.$store.commit("jiayi",this.key)
        this.$store.commit("isfals");

      }
      // console.log(this.ispush)
      this.$router.push({
        path: `shopping?index=${index}`
      });
    },
    onClickButton() {
      this.$store.commit("add", this.$route.query.index);
    }
  },
  created() {},
  watch: {},
  computed: {
    ...mapState({
      list: state => state.bannerLiner.list,
      list1: state => state.bannerLiner.list1,
      ispush: state => state.shoppingCar.ispush,
      ispushList: state => state.shoppingCar.ispushList,

    })
  }
};
</script>

<style lang="less" scoped>
.top-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
}
.cell-box {
  padding: 0px 8px;
  font-size: 14px;
  .cell-text {
    color: #ff9b9f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
}
.top-banner {
  width: 100%;
  img {
    width: 100%;
    // height: 15.375rem;
    margin-top: -6.25rem;
  }
}
.product-info {
  box-sizing: border-box;
  padding: 8px 12px;

  h3.title2 {
    color: #333;
    font-size: 14px;
    font-weight: 500;
  }
  .price-up {
    color: #b81c22;
  }
  .price-down {
    font-size: 10px;
    color: #999;
    text-decoration: line-through;
  }
}
.pad {
  padding: 0.5rem;
  z-index: 999;
}
</style>