<template>
  <div class="body">
  <a href="/#/home">
  <img class="bac" src="../assets/09.jpg" alt=""></a>
  <span>加</span>
  <span>入</span>
  <span>我一</span>
  <span>们起</span>
  <span>  战</span>
  <span>  斗</span>
  <div class="foot">计算机协会&&图灵协会</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  beforeCreate: function () {
    // 添加样式隐藏拖动条
    document.getElementsByTagName('body')[0].className = 'hidden'
  },

  beforeDestroy: function () {
    // 去掉样式防止污染其他页面
    document.body.removeAttribute('class', 'hidden')
  }
}
</script>
<style scoped>
.body{
  height: 100%;
  width: 100%;
}
.bac{
  position: absolute;
  top: 0;
  left: 0;
  width: 113%;
  height: 100%;
  z-index: -999;
}
a{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.body>span{
  width: 140px;
  display: block;
  color: rgb(132, 138, 143);
  font-size: 70px;
}
.body>span:nth-child(6),
.body>span:nth-child(7){
  width: 140px;
  text-align: end;
}
.foot{
  width: 100%;
  position: absolute;
  bottom: 0;
  color: aliceblue;
  text-align: end;
}
</style>
