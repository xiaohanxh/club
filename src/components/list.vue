<template>
  <!---    文章列表     --->
  <div>
    <div :class="{'Box':pc,'Box1':!pc}">
      <div @click="show(index)"
           v-for="(item,index) in list"
           :key="index"
           class="box">
        <img :src="item.src"
             alt="">
        <div class="title"><span>{{item.name}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['pc'],
  data () {
    return {
      list: [
        { _id: 0, name: '这是第几个文章标题', src: require('../assets/01.jpg') },
        { _id: 1, name: '这是第几个文章标题', src: require('../assets/02.jpg') },
        { _id: 2, name: '这是第几个文章标题', src: require('../assets/03.jpg') },
        { _id: 3, name: '这是第几个文章标题', src: require('../assets/04.jpg') },
        { _id: 4, name: '这是第几个文章标题', src: require('../assets/05.jpg') },
        { _id: 5, name: '这是第几个文章标题', src: require('../assets/06.jpg') }
      ]
    }
  },
  created () {
    this.$http.get('articlelist').then(res => {
      this.list = res.data.data
    })
  },
  mounted () {
    setTimeout(() => {
      // 更改img请求url
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].src = 'http://192.168.0.108:5000/' + this.list[i].src.split('public')[1]
      }
    }, 1000)
  },
  methods: {
    show (e) {
      var _id = this.list[e]._id
      this.$emit('toid', _id)
    }
  }
}
</script>
<style scoped>
.Box {
  margin-top: 7px;
  background-color: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 12px;
}
.box {
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  width: 273px;
  height: 275px;
  text-align: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
}
.box:hover {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);
}
.box > img {
  margin-top: 20px;
  width: 253px;
  height: 169px;
}
.title {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #00a67c;
  text-decoration: none;
}
.title:hover {
  color: #3b6b5f;
}
</style>
<!-- !pc -->
<style scoped>
.Box1 {
  margin-top: 3px;
  background-color: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 6px;
}
.Box1 > .box {
  margin-top: 4px;
  overflow: hidden;
  width: auto;
  height: 200px;
  text-align: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
}
.Box1 > .box > img {
  margin-top: 10px;
  width: 190px;
  height: 100px;
}
</style>
