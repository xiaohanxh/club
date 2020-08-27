<template>
  <div class="Body">
    <div class="left">
      <div class="top">Dashboard</div>
      <div>
        <router-link class="router-link"
                     to="/user">个人资料</router-link>
        <router-link class="router-link"
                     to="/user/updata">个人资料</router-link>
        <router-link class="router-link"
                     to="/user/message">个人资料</router-link>
        <router-link class="router-link"
                     to="/">个人资料</router-link>
        <router-link class="router-link"
                     to="/">个人资料</router-link>
        <router-link class="router-link"
                     to="/">个人资料</router-link>
        <router-link class="router-link"
                     to="/">个人资料</router-link>
      </div>
    </div>
    <div class="main">
      <div class="top top1"></div>
      <div class="title"></div>
      <div class="body">
        <router-view :id='id'></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.id
    console.log(this.$route.query)
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
  }
}
</script>
<style scoped>
.Body {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr;
}
.left {
  text-align: center;
  height: 100%;
  width: 100%;
}
.main {
  width: 100%;
  height: 100%;
  background-color: #f0edf1;
}
.top {
  width: 100%;
  height: 7%;
  line-height: 60px;
  background-color: #ffbd49;
}
.top1 {
  background-color: #282c31;
}
.router-link {
  display: block;
  color: #282c31;
  height: 100px;
  box-shadow: 0px 0px 10px rgba(184, 184, 184, 0.192);
  line-height: 100px;
  font-size: 18px;
  font-weight: 600;
}
.router-link-exact-active {
  color: #ffbd49;
}
.title {
  height: 1%;
}
.body {
  width: 75%;
  margin: 0 auto;
  height: 92%;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: auto;
}
</style>
