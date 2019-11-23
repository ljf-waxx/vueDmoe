<template>
  <div>
    <!-- <van-nav-bar title="添加收货人" left-text="返回" left-arrow @click-left="go"></van-nav-bar> -->
     <!-- {{show}} -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
   
  </div>
</template>

<script>
import { Toast } from 'vant';
import { AddressEdit } from 'vant';
import arealist from '../assets/js/area'
export default {
  data() {
    return {
      areaList:arealist,
      searchResult: [],
      AddressEdit:AddressEdit
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
     onSave(AddressInfo ) {
    //   Toast('save');
    console.log(AddressInfo)
        this.$emit("show",false,AddressInfo)



    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  },
  props:["show"]
};
</script>

<style lang="scss" scoped>
</style>