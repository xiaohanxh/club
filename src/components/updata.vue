<template>
  <div>
    <div>
      <input type="file"
             ref="clearFile"
             @change="getFile($event)"
             accept=".md">
      <span>支持扩展名：.md </span>
    </div>
    <div>
      <input type="file"
             ref="clearFile"
             @change="getimgs($event)"
             multiple="multiplt"
             accept=".jpg,.png,.jpeg,.gif,.webp">
      <span>支持扩展名：.jpg .png .jpeg .gif .webp </span>
    </div>
    <div>
      <input type="file"
             ref="clearFile"
             @change="getimg($event)"
             accept=".jpg,.png,.jpeg,.gif,.webp">
      <span>支持扩展名：.jpg .png .jpeg .gif .webp </span>
    </div>
    <button @click="updata()">上传</button>
    <div>
      <div v-html="text"></div>
      <img v-for="(item,index) in imgShow"
           :key="index"
           :src="item"
           :alt="index">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      md: '',
      src: { name: '', data: '' },
      img: [],
      imgShow: [],
      text: ''
    }
  },
  methods: {
    getFile (e) {
      const that = this
      var reader = new FileReader()// 新建一个FileReader
      var file = e.target.files[0]
      this.title = file.name
      reader.readAsText(file, 'UTF-8')// 读取文件
      reader.onload = function (evt) { // 读取完文件之后会回来这里
        var fileString = evt.target.result // 读取文件内容
        that.md = fileString
        that.text = that.$md(fileString) // 转为html
      }
    },
    getimgs (e) {
      const that = this
      var file = event.target.files
      for (var i = 0; i < file.length; i++) {
        //    上传类型判断
        var imgName = file[i].name
        var idx = imgName.lastIndexOf('.')
        if (idx !== -1) {
          var ext = imgName.substr(idx + 1).toUpperCase()
          ext = ext.toLowerCase()
          if (ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg' && ext !== 'gif' && ext !== 'webp') {
          } else {
            this.img.push(file[i])
          }
        } else {
        }
        const reader = new FileReader()
        reader.readAsDataURL(file[i])
        reader.onload = function (e) {
          that.imgShow.push(this.result)
        }
      }
    },
    getimg () {
      const that = this
      var file = event.target.files[0]
      this.src.name = file.name
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        that.src.data = this.result
      }
    },
    updata () {
      var img = []
      for (var i = 0; i < this.img.length; i++) {
        img.push({})
        img[i].name = this.img[i].name
        img[i].data = this.imgShow[i]
      }
      var body = {
        name: this.title,
        src: { name: this.src.name, data: this.src.data },
        img: img,
        tag: '原创',
        md: this.md
      }
      this.$http.post('addarticle', body).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
</style>
