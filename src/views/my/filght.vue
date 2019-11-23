<template>
  <div style="padding-top:44px">
    <van-nav-bar title="我的航班" left-text="返回" left-arrow @click-left="go" style="position: fixed; top:0; width:100%;"></van-nav-bar>

    <p style="line-height: 1.75em; padding:0px 10px; ">
      <span
        style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px; color: rgb(217, 150, 148);"
      >为了保障您能按时提货，航班、火车票或轮渡信息变更的顾客，请联系客服变更提货时间，客服电话：400-699-6956（早9：00~晚22：00）</span>
      <span style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;">
        <br />
        <strong>最晚变更时间说明：</strong>
        <br />
        <strong>三亚机场离岛：</strong>
        <br />如新航班时间早于原航班，请至少于新航班起飞前6小时联系客服；
        <br />如新航班时间晚于原航班，请至少于原航班起飞前6小时联系客服；
        <br />
        <strong>
          海口、琼海机场离岛：
          <br />
        </strong>如新航班时间早于原航班，请至少于新航班起飞前24小时联系客服；
        <br />如新航班时间晚于原航班，请至少于原航班起飞前24小时联系客服；
        <br />
        <strong>火车离岛：</strong>
        <br />三亚、东方、海口火车站离岛：请至少于原火车离岛时间前24小时联系客服；
        <br />
        <strong>新海港、秀英港离岛：</strong>
        <br />如新乘船时间早于原乘船时间，请至少于新乘船时间前24小时联系客服；
        <br />如新乘船时间晚于原乘船时间，请至少于原乘船时间前24小时联系客服；
        <br />
        <br />
        <span
          style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px; color: rgb(255, 255, 255); background-color: rgb(217, 150, 148);"
        >
          如果乘火车地点发生变化：请您至少提前24小时联系客服。
          <br />如果乘机地点发生变化：请您至少提前3天联系客服。
          <br />如果轮渡乘船地点发生变化，请您至少提前24小时联系客服。
        </span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>