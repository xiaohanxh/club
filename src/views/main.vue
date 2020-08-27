<template>
  <div class="body">

    <!-- 左边盒子 -->
    <left v-on:about='aboutevent' class="main"></left>
    <!-- 中间盒子 -->
    <center :about='about' class="main"></center>
    <!-- 右边盒子 -->
<right :about='about' class="main"></right>
  </div>
</template>
<script>
import left from '@/components/left'
import center from '@/components/center'
import right from '@/components/right'
export default {
  components: { left, center, right },
  data () {
    return {
      about: false
    }
  },
  beforeCreate: function () {
    // 添加样式隐藏拖动条
    document.getElementsByTagName('body')[0].className = 'hidden'
  },

  beforeDestroy: function () {
    // 去掉样式防止污染其他页面
    document.body.removeAttribute('class', 'hidden')
  },
  methods: {
    // 获取左边选择项目
    aboutevent (e) {
      this.about = e
    }
  }
}
</script>
<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.body {
  height: 100%;
}
.main {
  height: 100%;
}
</style>
