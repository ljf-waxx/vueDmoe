<template>
  <div>
    <van-nav-bar
      title="我的提货人"
      left-text="返回"
      left-arrow
      @click-left="go"
    ></van-nav-bar>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
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
      list:  this.$store.state.city.cityList
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

    onEdit(item,value) {
      console.log(item,value)
      this.$router.push({
        path:`/recity?id=${value}`
      })
      // Toast("编辑地址尚未开放:" + index);
    },
    showfun(value, objData) {
      // console.log(value, objData);
      this.show = true;
      this.list.push({
        id: objData.id,
        name: objData.name,
        tel: objData.tel,
        address: objData.address
      });
    },
    select(item,id) {
      console.log(item)
      Toast("地址切换成功");
      this.$store.commit("setId",id)
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped></style>
