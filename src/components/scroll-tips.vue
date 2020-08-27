<template>
  <!-- 滚动栏 -->
  <div class="textBox">
    <div>
      <transition name="slide">
        <p class="text"
           :key="text.id">{{text.val}}</p>
      </transition>
    </div>
    <div>
      <router-link class="login"
                   to="/users/login">登录/注册</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      textArr: [
        '1 第一条公告',
        '2 第二条公告第二条公告',
        '3 第三条公告第三条公告第三条公告'
      ],
      number: 0
    }
  },
  mounted () {
    // 触发字幕滚动
    this.startMove()
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  methods: {
    // 公告滚动
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === this.textArr.length - 1) {
          this.number = 0
        } else {
          this.number += 1
        }
        this.startMove()
      }, 4000)
    }
  }
}
</script>
<style scoped>
/** 滚动栏 */
.textBox {
  background-color: aliceblue;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  line-height: 5px;
  display: grid;
  grid-template-columns: 14fr 1fr;
}
.login {
  line-height: 40px;
  color: rgb(16, 138, 138);
}
.login:hover {
  color: rgb(59, 240, 240);
}
.text {
  position: absolute;
  bottom: 0;
  text-indent: 15px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s linear;
}
.slide-enter {
  transform: translateY(20px) scale(1);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-20px) scale(0.8);
  opacity: 0;
}
</style>
