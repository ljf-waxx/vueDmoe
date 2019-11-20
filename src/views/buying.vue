<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="go" />
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
    {{list[$route.query.index]}}
    <h3>index={{$route.query.index}}</h3>

    <van-goods-action class="pad">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="gobuy" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"  />
      <van-goods-action-button type="danger" text="立即购买"  @click="gobuy($route.query.index)"/>
    </van-goods-action>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      key: this.$route.query.index,
      ischecked : this.ispush,
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    gobuy(index) {
      if(this.ispushList.length >= 0){
           this.$store.state.shoppingCar.lists.push(this.list[index])
           this.$store.commit("isfals")
      }
    // console.log(this.ispush)
      this.$router.push({
        path:`shopping?index=${index}`
      });
    },
    onClickButton() {
       this.list[this.$route.query.index].num +=1
    }
  },
  created() {
  },
  watch: {
    "$router.path": function(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    }
  },
  computed: {
    ...mapState({
      list: state => state.bannerLiner.list,
      ispush : state => state.shoppingCar.ispush,
      ispushList : state => state.shoppingCar.ispushList

    })
  }
};
</script>

<style lang="less" scoped>
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
.pad{
    padding: .5rem;
}
</style>