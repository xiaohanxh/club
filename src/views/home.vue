<template>
  <div id="body">
    <!-- ---------------------------------     ------------    -->
    <!-- pc端 -->
    <div v-if="pc"
         class="body">
      <!--   背景图片   --->
      <img id="bac"
           src="../assets/01.jpg"
           alt="">
      <!-------   nav头部背景图   --------->
      <div id="top">
        <img src="../assets/10.jpg">
      </div>
      <div id="main">
        <!-- 头部导航栏 -->
        <Nav v-on:now="check"></Nav>
        <!-- 公告滚动 -->
        <scrollTips></scrollTips>
        <div>
          <!-- 左边 -->
          <div>
            <!-- little tips -->
            <div v-if="now!==0"
                 class="tips">
              {{textarr[now-1]}}
            </div>
            <!-- text  -->
            <arti :id="this.id"
                  v-if="textflag"></arti>
            <!-- 轮播图1 -->
            <Rotation @toid="getid"
                      v-if="now==0&&!textflag"
                      id="ro1"
                      :show="true"></Rotation>
            <!-- 热门   -->
            <hotart @toid="getid"
                    v-if="now==0"></hotart>
            <!-- 文章list -->
            <list @toid="getid"
                  :pc="pc"></list>
          </div>
          <!--   -----------------    -->
          <!-- 右边 -->
          <div>
            <!-- 轮播图2 -->
            <Rotation @toid="getid"
                      id="ro2"
                      :show="false"></Rotation>
            <!-- 快速导航 -->
            <qnav @toid="getid"></qnav>
            <!-- 最新发布  -->
            <latest @toid="getid"></latest>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------------     ------------    -->
    <!-- 移动端 -->
    <div v-if="!pc">
      <!--   背景图片   --->
      <img id="bac"
           src="../assets/01.jpeg"
           alt="">
      <div class="line">
        <img class="top"
             src="../assets/10.jpg">
      </div>
      <!-- 轮播图2 -->
      <Rotation class="ro"
                :show="false"></Rotation>
      <!-- 热门   -->
      <hotart></hotart>
      <!-- 文章list -->
      <list></list>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/nav'
import Rotation from '@/components/Rotation.vue'
import list from '@/components/list.vue'
import latest from '@/components/latest.vue'
import arti from '@/components/article'
import scrollTips from '@/components/scroll-tips'
import qnav from '@/components/qnav'
import hotart from '@/components/hotart'
export default {
  props: ['pc'],
  components: { Rotation, list, latest, arti, Nav, scrollTips, qnav, hotart },
  data () {
    return {
      now: 0,
      textarr: [
        '活动、新闻、公告所在',
        '教程、科普小知识',
        '与宅友业余爱好相关的内容',
        '各种资源下载处',
        '单反、通常、摄像机、无人机摄影等讨论区',
        '任何自己原创的内容都可以发布到这进行分享',
        '社团发展的想法和期望',
        '各种求助、发布任务、招聘、寻求工作和买卖物品的地方'
      ],
      textflag: false,
      id: 0
    }
  },
  methods: {
    check (e) {
      this.now = e
    },
    shows () {
      console.log(456)
      this.textflag = false
      window.scrollTo(0, 0)
    },
    getid (e) {
      console.log(e)
      this.id = e
      if (this.textflag) {
      } else {
        this.textflag = true
      }
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
#body {
  height: 100%;
  width: 100%;
}
.body {
  height: 100%;
  width: 100%;
}
/* 背景图片 */
#bac {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
}
/*** 头部bac **/
#top {
  width: 100%;
  height: 206px;
  position: relative;
}
#top > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 206px;
}
/** 主体 */
#main {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
#main > div {
  position: absolute;
  margin: 0 auto;
  width: 1226px;
}
#main > div:last-child {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 856px 360px;
  grid-column-gap: 10px;
}
/** 左边 */
#main > div:last-child > div:first-child {
  width: 856px;
}
.tips {
  background-color: #ffffff;
  margin-top: 7px;
  line-height: 40px;
  color: #626263;
  text-indent: 15px;
}
#ro1 {
  height: 408px;
}
/** 右边 */
#main > div:last-child > div:last-child {
  width: 360px;
}
#ro2 {
  height: 200px;
}
</style>
<!-- 移动端css ！部分 -->
<style scoped>
.top {
  height: 150px;
}
.line {
  height: 153px;
  background-color: rgba(27, 67, 197, 0.849);
}
.ro {
  width: 100%;
  height: 233px;
}
</style>
