<template>
  <div>
    <van-nav-bar title="我的购物袋" heighe:2.5rem />
    <div class="br-bor"></div>
    <div
      class="warm-prompt ng-binding"
      ng-bind-html="ctrl.data.reminder[0]"
    >温馨提示 :三亚机场出发，至少于起飞前6小时完成购买；海口美兰、琼海博鳌机场、火车站出发，至少离岛前一天内完成购买，如有疑问，请致电400-699-6956。</div>
    <div class="box-bottom">
      <div class="tip">您的购物袋内还没有任何商品 ……</div>
      <span class="btn">去逛逛</span>
    </div>
  </div>
</template>

<script>
export default {};
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
.box-bottom{
  width: 100%;
  text-align: center;
      position: absolute;
      bottom: 20%;
      >div{
        width: 100%;
      }
      
  }
  .btn{
       display: inline-block;
       height: 2.1875rem;
       line-height: 2.1875rem;
       color: #afadad;
       background-color:#b81c22;
        width: 80%;
       margin-top: 10px;
       border-radius: .375rem;
      }
</style>
