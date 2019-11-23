<template>
  <div style="padding-top:44px">
    <van-nav-bar
      title="我的航班"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>
    <cm-article-content
      class="padding ui-article-content rio ng-binding"
      ng-bind-html="ctrl.data.content"
      style="display: block; padding:12px 10px;"
    >
      <p style="text-align: left;">
        <span
          style="color: rgb(255, 255, 255); font-weight: bold; background-color: rgb(217, 150, 148); font-family: 微软雅黑; font-size: 14px;"
          >cdf离岛免税一三亚国际免税城</span
        >
      </p>
      <p style="text-align: left; margin-top: 5px; line-height: 3em;">
        <span style="font-size: 14px;">
          <span style="font-family: 微软雅黑;">
            客服热线：400-699-6956（早9:00-晚22:00 全年无休）
            <br />客服邮箱：sanyakefu@cdfg.com.cn
            <br />公司名称：中免集团三亚市内免税店有限公司
            <br />
          </span>
          <span style="font-family: 微软雅黑; text-align: center;"
            >地址：中国海南省三亚市海棠区海棠北路118号</span
          >
        </span>
      </p>
      <p class="MsoNormal" style="text-align: center;">
        <span style="font-family: 微软雅黑; font-size: 12pt;">
          <o:p></o:p>
        </span>
      </p>
    </cm-article-content>
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

<style lang="scss" scoped></style>
