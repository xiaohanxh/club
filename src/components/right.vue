<template>
  <div class="body">
    <!--   背景图--->
    <img v-if="!about"
         :class="['bac',move?'move':'',move2?'move2':'',move1?'move1':'']"
         :src="src"
         alt="">
    <img v-if="about"
         class="bac2"
         src="../assets/08.jpg"
         alt="">
    <img v-if="about"
         class="bac1"
         src="../assets/08.jpg"
         alt="">
    <!-- close 右 -->
    <div @click="close2"
         v-if="right&&!about"
         :class="['close',rtoright?'rtoright':'']">
      <button>&#62;</button>
    </div>
    <div @click="open2"
         v-if="!right&&!about"
         :class="['close','open2',rtoleft?'rtoleft':'']">
      <button>&#60;</button>
    </div>
    <!-- 右边盒子 -->
    <div v-if="right&&!about"
         :class="['right',rtoleft?'rtoleft':'',rtoright?'rtoright':'']"
         @animationend='cleft()'>
      <div class="but"
           @click="last"><button>&#60;</button><button @click="last">&#62;</button></div>
      <img @click="check(i)"
           v-for="(item,i) in img"
           :key="i"
           :src="item.src"
           :alt="i">
    </div>
  </div>
</template>
<script>
export default {
  props: ['about'],
  data () {
    this.qh(true)
    return {
      src: require('../assets/07.jpg'),
      // 背景图三种移动方式
      move: true,
      move1: false,
      move2: false,
      // 右抽屉open or close
      right: true,
      // 打开关闭动画
      rtoleft: false,
      rtoright: false,
      // 背景图地址
      img: [
        { src: require('../assets/01.jpg') },
        { src: require('../assets/02.jpg') },
        { src: require('../assets/03.jpg') },
        { src: require('../assets/04.jpg') }
      ],
      i: 0
    }
  },
  methods: {
    // 背景切换
    qh (e) {
      const that = this
      if (e) {
        (function a () {
          setTimeout(() => {
            if (that.i < that.img.length - 1) {
              that.src = that.img[that.i].src
              that.i++
            } else {
              that.i = 0
            }
            a()
          }, 3500)
        })();
        (function b () {
          setTimeout(() => {
            that.move = false
            that.move1 = false
            that.move2 = false
            switch (that.i) {
              case 1: that.move = !that.move; break
              case 2: that.move1 = !that.move1; break
              case 3: that.move2 = !that.move2; break
              default: that.move = !that.move
            }
            b()
          }, 7000)
        })()
      }
    },
    last () {
      var i = this.i
      i--
      if (i > 0) {
        this.src = this.img[i].src
      } else {
        i = this.img.length - 1
        this.src = this.img[i].src
      }
      this.i = i
    },
    // 动画结束后关闭/开启
    cleft () {
      const that = this
      if (that.rtoleft) {
        that.rtoleft = false
      }
      if (that.rtoright) {
        that.rtoright = false
        that.right = false
      }
    },
    open2 () {
      // 打开右动画
      this.right = true
      this.rtoleft = true
    },
    close2 () {
      this.rtoright = true
    },
    check (e) {
      this.src = this.img[e].src
    }
  }
}
</script>
<style scoped>
.body {
  height: 100%;
  width: 100%;
}
/** 背景图 */
.bac {
  height: 120%;
  width: 120%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999999;
  cursor: pointer;
  transition: all 11s;
}
.bac1 {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 0);
  z-index: -998;
  cursor: pointer;
  background-color: aliceblue;
}
.bac2 {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-80%, 0);
  z-index: -998;
  cursor: pointer;
  background-color: aliceblue;
}
.move {
  animation: move 12s;
  animation-timing-function: ease-in;
  -moz-animation: move 12s; /* Firefox */
  -webkit-animation: move 12s; /* Safari and Chrome */
  -o-animation: move 12s; /* Opera */
}
.move2 {
  animation: move2 12s;
  animation-timing-function: ease-in;
  -moz-animation: move2 12s; /* Firefox */
  -webkit-animation: move2 12s; /* Safari and Chrome */
  -o-animation: move2 12s; /* Opera */
}
.move3 {
  animation: move3 12s;
  animation-timing-function: ease-in;
  -moz-animation: move3 12s; /* Firefox */
  -webkit-animation: move3 12s; /* Safari and Chrome */
  -o-animation: move3 12s; /* Opera */
}
@keyframes move {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-10%, -10%);
  }
}
@keyframes move2 {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, -10%);
  }
}
@keyframes move3 {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-10%, 0);
  }
}
/* 右抽屉 */
.right {
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  background-color: rgba(30, 39, 49, 0.9);
}
.right > div:first-child {
  margin-top: 50px;
  height: 70px;
  background-color: #363636;
}
.but > button {
  color: #444343;
  outline: none;
  border: none;
  font-size: 40px;
  font-weight: 900;
  width: 50%;
  height: 100%;
  background-color: #343537;
}
.but > button:hover {
  color: #000000;
}
.right > img {
  margin: 3px 0;
  width: 125px;
  height: 100px;
}
.close > button {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  outline: none;
  margin-left: 50%;
  margin-top: 50%;
  border: none;
  transform: translate(-50%, -50%);
  background-color: #1a1c25;
  color: aliceblue;
  font-weight: 800;
  font-size: 20px;
}
/** 鼠标放置放大 */
.right > img:hover {
  transform: scale(1.2);
}
.close {
  background-color: #363636;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 151px;
  top: 50px;
  border-radius: 2px;
}
.open2 {
  right: 0px;
}
/* 向左 */
.rtoleft {
  animation: rtoleft 2s;
  animation-timing-function: ease-in;
  -moz-animation: rtoleft 2s; /* Firefox */
  -webkit-animation: rtoleft 2s; /* Safari and Chrome */
  -o-animation: rtoleft 2s; /* Opera */
}
/** 向右 */
.rtoright {
  animation: rtoright 2s;
  animation-timing-function: ease-in;
  -moz-animation: rtoright 2s; /* Firefox */
  -webkit-animation: rtoright 2s; /* Safari and Chrome */
  -o-animation: rtoright 2s; /* Opera */
}
@keyframes rtoleft {
  from {
    transform: translate(100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-moz-keyframes rtoleft /* Firefox */ {
  from {
    transform: translate(100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes rtoleft /* Safari 和 Chrome */ {
  from {
    transform: translate(100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-o-keyframes rtoleft /* Opera */ {
  from {
    transform: translate(100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes rtoright {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100%, 0);
  }
}

@-moz-keyframes rtoright /* Firefox */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100%, 0);
  }
}

@-webkit-keyframes rtoright /* Safari 和 Chrome */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100%, 0);
  }
}

@-o-keyframes rtoright /* Opera */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100%, 0);
  }
}
</style>
