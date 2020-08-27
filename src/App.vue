<template>
  <div id="app">
    <router-view :pc='pc'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pc: true
    }
  },
  mounted () {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      this.pc = false// 移动端
    } else {
      this.pc = true// pc端
    }
  }
}
</script>

<style>
</style>
