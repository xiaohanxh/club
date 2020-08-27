<template>
  <div :class="[pc?'pcmainlog':'mbmainlog']">
    <img class="bac"
         :src="[pc?pcbac:mbbac]"
         alt="">
    <transition mode="out-in">
      <router-view :pc='pc'></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['pc'],
  data () {
    return {
      pcbac: require('../assets/08.jpg'),
      mbbac: require('../assets/01.jpeg')
    }
  }
}
</script>
<style scoped>
.bac {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(140px);
}
.v-enter-active,
.v-enter-active {
  transition: all 100 ease;
}
.pcmainlog {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  height: 100%;
  font-family: "新宋体";
}
.mbmainlog {
  background-size: 100% 100%;
  height: 100%;
  font-family: "新宋体";
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(140px);
}
.v-enter-active,
.v-enter-active {
  transition: all 1s ease;
}
</style>
