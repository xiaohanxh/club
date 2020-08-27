<template>
  <!-- 快速导航 -->
  <div class="qnva">
    <a @click="Toid(0)"
       title="本站使用导航和基本属性">本站使用导航和基本属性</a>
    <a @click="Toid(0)"
       title="本站干货导航">本站干货导航</a>
    <a @click="Toid(0)"
       title="视频编辑上手之路">视频编辑上手之路</a>
    <a @click="Toid(0)"
       title="小白电脑日常使用维护导航">小白电脑日常使用维护导航</a>
    <a @click="Toid(0)"
       title="Adobe全家桶下载和安装破解方法">Adobe全家桶下载和安装破解方法</a>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    Toid (e) {
      this.$emit('toid', e)
    }
  }
}
</script>
<style scoped>
/** 快速导航 */
.qnva {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin-top: 8px;
  border-radius: 3px;
  height: 190px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}
.qnva > a {
  text-align: center;
  display: block;
  color: #ffffff;
  background-color: rgb(66, 139, 202);
  line-height: 40px;
  font-size: 19px;
}
.qnva > a:hover {
  background-color: rgb(153, 193, 228);
}
.qnva > a:nth-child(2) {
  background: none 0px 0px repeat scroll rgb(125, 181, 0);
}
.qnva > a:nth-child(3) {
  background: none 0px 0px repeat scroll rgb(217, 83, 79);
}
.qnva > a:nth-child(4) {
  background: none 0px 0px repeat scroll rgb(240, 173, 78);
}
.qnva > a:nth-child(5) {
  background: none 0px 0px repeat scroll rgb(0, 0, 0);
}
.qnva > a:nth-child(2):hover {
  background: none 0px 0px repeat scroll rgb(168, 201, 97);
}
.qnva > a:nth-child(3):hover {
  background: none 0px 0px repeat scroll rgb(214, 136, 133);
}
.qnva > a:nth-child(4):hover {
  background: none 0px 0px repeat scroll rgb(230, 188, 131);
}
.qnva > a:nth-child(5):hover {
  background: none 0px 0px repeat scroll rgb(53, 52, 52);
}
</style>
