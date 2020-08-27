<template>
  <!---    最新文章     --->
  <div class="latest">
    <div>最新文章</div>
    <div></div>
    <div>
      <div @click="Toid(index)"
           v-for="(item,index) in list"
           :key="index"
           class="body">
        <div>
          <img :src="item.src"
               :alt="index">
          <div class="title">{{item.name}}</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        { _id: 0, name: '这是第几个文章标题asjkndjkwanksjndkjanw', src: require('../assets/01.jpg') },
        { _id: 1, name: '这是第几个文章标题撒旦克里夫你LKANLA看', src: require('../assets/02.jpg') },
        { _id: 0, name: '这是第几个文章标题', src: require('../assets/03.jpg') },
        { _id: 0, name: '这是第几个文章标题', src: require('../assets/04.jpg') },
        { _id: 0, name: '这是第几个文章标题', src: require('../assets/05.jpg') },
        { _id: 0, name: '这是第几个文章标题', src: require('../assets/06.jpg') }
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
    Toid (e) {
      var _id = this.list[e]._id
      this.$emit('toid', _id)
    }
  }
}
</script>
<style scoped>
.latest {
  margin-top: 17px;
  width: 360px;
  background-color: #fff;
}
.latest > :first-child {
  color: #03a9f4;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  line-height: 45px;
  text-indent: 15px;
}
.latest > :nth-child(2) {
  width: 95%;
  margin-left: 2.5%;
  background-color: #00a67c;
  height: 1px;
}
.body > div:first-child {
  width: 320px;
  height: 96px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
}
.body > div:first-child > img {
  margin-top: 16px;
  margin-left: 10px;
  width: 100px;
  height: 64px;
}
.body > div:last-child {
  background-color: rgba(92, 92, 92, 0.1);
  height: 1px;
  width: 95%;
  margin-left: 2.5%;
}
.title {
  margin-top: 10px;
  font-size: 14px;
  color: #00a67c;
}
.title:hover {
  color: orangered;
}
</style>
