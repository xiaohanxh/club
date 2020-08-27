<template>
  <div id="nav"
       :class="['nav',{'fix-nav': navBarFixed}]">
    <div>
      <div>
        <table border="0">
          <tr>
            <a href="javascript:location.reload();"
               @click="cleck(0)"
               :class="['link',{'link-exact':now==0}]">首页</a>
            <a @click="cleck(1)"
               :class="['link',{'link-exact':now==1}]">咨询</a>
            <a @click="cleck(2)"
               :class="['link',{'link-exact':now==2}]">科普</a>
            <a @click="cleck(3)"
               :class="['link',{'link-exact':now==3}]">宅趣味</a>
            <a @click="cleck(4)"
               :class="['link',{'link-exact':now==4}]">资源</a>
            <a @click="cleck(5)"
               :class="['link',{'link-exact':now==5}]">摄影</a>
            <a @click="cleck(6)"
               :class="['link',{'link-exact':now==6}]">原创</a>
            <a @click="cleck(7)"
               :class="['link',{'link-exact':now==7}]">发展</a>
            <a @click="cleck(8)"
               :class="['link',{'link-exact':now==8}]">委托与交易</a>
            <span class="search"><input /><span>搜索</span> </span>
          </tr>
        </table>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navBarFixed: false,
      now: 0
    }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  },
  destroyed () {
    // 移除事件监听
    window.removeEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll () {
      // 滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

      // 容器的高度
      var offsetTop = document.querySelector('#nav').offsetHeight
      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (scrollTop - 55 > offsetTop) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },
    cleck (e) {
      this.now = e
      this.$parent.shows()
      this.$emit('now', this.now)
    }
  }
}
</script>
<style scoped>
.nav {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  position: relative;
  bottom: 0;
  left: 0;
  height: 58px;
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
/* 固定导航 */
.fix-nav {
  position: fixed !important;
  top: 0px;
  z-index: 999;
}
#nav > div:first-child {
  height: 55px;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
/*  蓝条 */
#nav > div:last-child {
  height: 3px;
  background-color: #12a9ee;
}
/**   普通的tabbar*/
.link {
  font-size: 17px;
  padding: 20px 23px;
  line-height: 50px;
  color: aliceblue;
}
.link:hover {
  background-color: #5db6ffc9;
}
/* 选中的tabbar */
.link-exact {
  background-color: #12a8eebd;
}
.search > input {
  height: 35px;
  width: 260px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 20px;
  color: rgb(10, 10, 10);
}
.search > span {
  background-color: #12a9ee;
  color: floralwhite;
  padding: 18px 23px;
}
</style>
