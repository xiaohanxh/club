<template>
  <div class="body">
    <!-- 左边盒子 -->
    <div v-if="left"
         :class="['left',ltoleft?'toleft':'',ltoright?'toright':'']"
         @animationend='cleft()'>
      <img src="../assets/02.jpg"
           alt="">
      <div @click="home">
        <div>首页</div>
        <div>HOME</div>
      </div>
      <div><a href="/#/home">
          <div>社团首页</div>
          <div>COMMUNITY HOME PAGE</div>
        </a>
      </div>
      <div><a href="#">
          <div>宣传视频</div>
          <div>PROMOTIONAL VIDEO</div>
        </a>
      </div>
      <div @click="about">
        <div>关于</div>
        <div>about</div>
      </div>
      <button @click="close">&#60;</button>
    </div>
    <!-- open 左 -->
    <div v-if="!left"
         class="open"
         @click="open">
      <button>&#62;</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 左右抽屉open or close
      left: true,
      // 打开关闭动画
      ltoleft: false,
      ltoright: false,
      aboutflag: false
    }
  },
  methods: {
    // 关闭做左抽屉
    close () {
      // 动画
      this.ltoleft = true
    },
    // 动画结束后关闭/开启
    cleft () {
      const that = this
      if (that.ltoleft) {
        that.ltoleft = false
        that.left = false
      }
      if (that.ltoright) {
        that.ltoright = false
      }
    },
    open () {
      // 打开左动画
      this.left = true
      this.ltoright = true
    },
    about () {
      this.aboutflag = true
      this.$emit('about', this.aboutflag)
    },
    home () {
      this.aboutflag = false
      this.$emit('about', this.aboutflag)
    }
  }
}
</script>
<!--  左边盒子style -->
<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.body {
  height: 100%;
  width: 100%;
}
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
/* 向左 */
.toleft {
  animation: toleft 2s;
  animation-timing-function: ease-in;
  -moz-animation: toleft 2s; /* Firefox */
  -webkit-animation: toleft 2s; /* Safari and Chrome */
  -o-animation: toleft 2s; /* Opera */
}
/** 向右 */
.toright {
  animation: toright 2s;
  animation-timing-function: ease-in;
  -moz-animation: toright 2s; /* Firefox */
  -webkit-animation: toright 2s; /* Safari and Chrome */
  -o-animation: toright 2s; /* Opera */
}
/* 左边抽屉 */
.left {
  margin-left: 20px;
  width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
}
/* 左侧图片 */
.left > img {
  width: 200px;
  height: 200px;
  margin-top: 60px;
  margin-left: 50%;
  transform: translate(-50%, 0);
}
/* 三个选择 */
.left > div > a {
  display: block;
}
.left > div {
  font-weight: 700;
  color: #b6b6b7;
  height: 100px;
}
.left > div:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.left > div > :first-child {
  padding-top: 30px;
}
/* 关闭左抽屉 */
.left > button {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgba(18, 19, 18, 0.6);
  color: aliceblue;
  font-weight: 800;
  font-size: 20px;
  border: none;
  outline: none;
}
/* 打开左抽屉*/
.open {
  background-color: rgba(50, 51, 52, 0.5);
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}
.open:hover {
  background-color: rgba(50, 51, 52, 1);
}
.open > button {
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
@keyframes toleft {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-120%, 0);
  }
}

@-moz-keyframes toleft /* Firefox */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-120%, 0);
  }
}

@-webkit-keyframes toleft /* Safari 和 Chrome */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-120%, 0);
  }
}

@-o-keyframes toleft /* Opera */ {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-120%, 0);
  }
}
@keyframes toright {
  from {
    transform: translate(-100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-moz-keyframes toright /* Firefox */ {
  from {
    transform: translate(-100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes toright /* Safari 和 Chrome */ {
  from {
    transform: translate(-100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}

@-o-keyframes toright /* Opera */ {
  from {
    transform: translate(-100%, 0);
  }
  to {
    transform: translate(0, 0);
  }
}
</style>
