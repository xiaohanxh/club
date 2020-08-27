<template>
  <div id="body">
    <div id="top">
      <div>{{message.name}}</div>
      <div>
        <div>{{message.tag}}</div>
        <div>{{message.created_time|date}}</div>
      </div>
      <div class="line"></div>
    </div>
    <div id="maintext"
         v-html="text">
    </div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  watch: {
    // id改变重新请求数据
    id (newid, oldid) {
      this.$http.post('articlebyid', { _id: newid }).then(res => {
        this.message = res.data.data.message
        this.text = this.$md(res.data.data.text)
      })
    }
  },
  data () {
    return {
      message: {},
      text: ''
    }
  },
  created () {
    this.$http.post('articlebyid', { _id: this.id }).then(res => {
      this.message = res.data.data.message
      this.text = this.$md(res.data.data.text)
    })
  },
  filters: {
    date (e) {
      const date = e + ' '
      var year = date.split('T')[0]
      var time = date.split('T')[1] + ''
      time = time.split('.')[0]
      return year + '-' + time
    }
  },
  updated () {
    setTimeout(() => {
      // 更改img请求url
      var img = document.getElementById('maintext').getElementsByTagName('img')
      for (var i = 0; i < img.length; i++) {
        img[i].src = 'http://192.168.0.108:5000/' + this.message.name + img[i].src.split('img')[1]
        img[i].style.width = '99%'
      }
    }, 100)
  }
}
</script>
<style scoped>
#body {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
#maintext {
  width: 98%;
  margin-left: 1%;
}
#top > :first-child {
  color: #444;
  font-weight: 400;
  font-size: 24px;
  line-height: 60px;
  text-indent: 25px;
}
#top > :nth-child(2) {
  display: flex;
  justify-content: flex-end;
}
#top > :nth-child(2) > div {
  padding: 1px 15px;
  padding-bottom: 10px;
}
#top > :nth-child(3) {
  background-color: #44444459;
  height: 1px;
  width: 100%;
}
</style>
