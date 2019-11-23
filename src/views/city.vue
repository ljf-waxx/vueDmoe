<template>
  <div>
    <van-nav-bar title="我的提货人" left-text="返回" left-arrow @click-left="go"></van-nav-bar>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      @select ="select"
      v-show="show"
    />
    <addCity v-show="!show" :show="show" @show="showfun"></addCity>
  </div>
</template>

<script>
import addCity from "../views/addCity";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: true,

      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  components: { addCity },
  methods: {
    go() {
      this.$router.go(-1);
    },
    onAdd() {
      Toast("新增地址");
      console.log("aaa");
      // this.$router.push("/addCity")
      this.show = false;
    },

    onEdit(item, index) {
      Toast("编辑地址尚未开放:" + index);
    },
    showfun(value, objData) {
      console.log(value, objData);
      this.show = true;
      this.list.push({
        id: objData.id,
        name: objData.name,
        tel: objData.tel,
        address: objData.address
      });
    },
    select(){
       Toast("地址切换成功" );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>