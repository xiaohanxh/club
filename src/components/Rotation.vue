<template>
  <!---    轮播图     --->
  <div :class="['carousel-wrap',{'grid':show}]"
       id="carousel">
    <div v-if='show'
         class="carousel-items">
      <span v-for="(list,index) in slideList"
            @mouseover="change(index)"
            :key="index">
        <img :src="list.src"
             :alt="index"></span>
    </div>
    <transition-group tag="ul"
                      class='slide-ul'
                      name="list">
      <li v-for="(list,index) in slideList"
          :key="index"
          v-show="index===currentIndex"
          @mouseenter="stop"
          @mouseleave="go"
          @click="Toid(index)">
        <a>
          <img :src="list.src">
        </a>
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: ['show'],
  data () {
    return {
      slideList: [
        { _id: 0, src: require('../assets/01.jpg') },
        { _id: 0, src: require('../assets/02.jpg') },
        { _id: 0, src: require('../assets/03.jpg') },
        { _id: 0, src: require('../assets/04.jpg') }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  methods: {
    go () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 1000)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    change (index) {
      this.currentIndex = index
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    },
    Toid (e) {
      var _id = this.slideList[e]._id
      this.$emit('toid', _id)
    }
  },
  created () {
    this.$http.get('articlelist').then(res => {
      this.slideList = res.data.data
    })
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  },

  mounted () {
    setTimeout(() => {
      // 更改img请求url
      for (var i = 0; i < this.slideList.length; i++) {
        this.slideList[i].src = 'http://192.168.0.108:5000/' + this.slideList[i].src.split('public')[1]
      }
    }, 1000)
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
  margin: 0;
  padding: 0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
.carousel-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 7px;
}

.slide-ul {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  overflow-y: auto;
  z-index: 10;
  top: 380px;
  width: 100%;
  height: 100%;
  font-size: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
}

.carousel-items::-webkit-scrollbar {
  width: 0 !important;
}
.carousel-items {
  -ms-overflow-style: none !important;
  overflow: -moz-scrollbars-none !important;
}

.carousel-items span {
  padding: 3px;
  background-color: aliceblue;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>
