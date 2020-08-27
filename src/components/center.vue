<template>
  <div class="body">
    <!--                                                             -->
    <!-- 中间盒子 -->
    <div v-if="!about"
         id="box"
         :class="['box',{'box2':box}]">
      <h2>欢迎来到新科</h2>
      <p>时间的流沙，宅人的乐园</p>
      <a href="/#/home"
         target="_blank"
         title="新科社团|时间的流沙，宅人的乐园"
         class="button btn_1">点击进入社团</a>
    </div>

    <!--                                                             -->
    <!-- about -->
    <div v-if="about"
         id="about">
      <div>关于社团</div>
      <div></div>
      <div><img src="../assets/01.jpg"
             alt=""></div>
      <div>计算机协会&&图灵协会</div>
      <div>本网站由吧lava lava啦v拉绿蜡绿蜡绿蜡绿蜡绿蜡率拉拉v那女那女那女那女lava吕娜v啊v那v那女那女那女女爱侣拉绿蜡v啦vlavla绿啊绿蜡v阿里vlavlavlava绿啊绿蜡率啊vlavavlav啦vlavlavlavlavl爱侣啊屡屡啊v阿绿啊v啦v啊v啊v啊v啦v绿蜡</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['about'],
  data () {
    const that = this;
    (function a () {
      setTimeout(() => {
        if (document.getElementById('box')) {
          that.box = !that.box
          if (that.box) {
            document.getElementById('box').style.display = 'block'
          } else {
            document.getElementById('box').style.display = 'none'
          }
        }
        a()
      }, 4000)
    })()
    return {
      box: false
    }
  }
}
</script>
<!--  中间盒子style --->
<style scoped>
.body {
  height: 100%;
  width: 100%;
}
/* 中间盒子 **/
.box {
  padding: 20px;
  width: 300px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 100px;
  left: 350px;
}
.box2 {
  animation: fade-in; /*动画名称*/
  animation-duration: 3s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
}
@keyframes fade-in {
  0% {
    opacity: 0;
  } /*初始状态 透明度为0*/
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  } /*结束状态 透明度为1*/
}
@-webkit-keyframes fade-in {
  /*针对webkit内核*/
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.box > a {
  border: none;
  outline: none;
  color: aliceblue;
  padding: 3px;
  background-color: #b6b6b7;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
}
/***  about */
#about {
  height: 100%;
  width: 1100px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0px;
  left: 290px;
  padding-left: 40px;
  padding-top: 20px;
}
#about > div:first-child {
  color: #ffffff;
  font: 2.5em/1.23em Cuprum, Arial, Helvetica, "Nimbus Sans L", sans-serif;
}
#about > div:nth-child(2) {
  margin: 2.5%;
  margin-left: 0;
  width: 96.5%;
  height: 3px;
  background-color: #ffffff;
}
#about > div:nth-child(3) > img {
  width: 96.5%;
  height: 0%;
}
#about > div:nth-child(4) {
  color: #ffffff;
  font: 2em/1.58em Cuprum, Arial, Helvetica, "Nimbus Sans L", sans-serif;
  padding: 0.68em 0;
}
#about > div:nth-child(5) {
  color: #ffffff;
  text-align: left;
  font: 0.75em/1.83em Arial, Helvetica, "Nimbus Sans L", sans-serif;
}
</style>
