<template>
  <div class="hot">
    <div>热门帖子</div>
    <div></div>
    <div>
      <div @click="Toid(index)"
           v-for="(item,index) in Postings"
           :key='index'><span>{{index+1}}</span><span>{{item.name}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Postings: [
      ]
    }
  },
  created () {
    this.$http.get('articlelist').then(res => {
      const list = []
      for (let i = 0; i < 3; i++) {
        list[i] = res.data.data[i]
      }
      this.Postings = list
    })
  },
  methods: {
    Toid (e) {
      var _id = this.Postings[e]._id
      this.$emit('toid', _id)
    }
  }
}
</script>
<style scoped>
/** 热门 */
.hot {
  text-indent: 30px;
  margin-top: 7px;
  width: 100%;
  height: 150px;
  background-color: aliceblue;
}
.hot > :first-child {
  line-height: 45px;
  font-weight: 400;
  color: #1abc9c;
  font-size: 16px;
}
.hot > :nth-child(2) {
  background-color: #1abc9c;
  width: 95%;
  height: 1px;
  margin-left: 2.5%;
}
.hot > :nth-child(3) {
  color: #1abc9c;
  margin-top: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;
}
.hot > :nth-child(3) > div:hover {
  color: #15584b;
}
.hot > :nth-child(3) > div > span:first-child {
  color: aliceblue;
  padding: 1px 8px;
  background-color: #12a9ee;
}
.hot > :nth-child(3) > div > span:nth-child(2) {
  padding-left: 10px;
}
</style>
