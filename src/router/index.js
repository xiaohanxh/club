import Vue from 'vue'
import VueRouter from 'vue-router'
import main0 from '../views/main.vue'
import main1 from '@/views/main1'
import home from '../views/home.vue'
import user from '../views/user.vue'
import session from '../views/session.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import updata from '../components/updata.vue'
import message from '../components/message.vue'
import x from '../components/nav.vue'
function pc () {
  if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return main1
  } else {
    return main0// pc端
  }
}
const main = pc()
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: main },
    { path: '/home', component: home },
    { path: '/users', redirect: '/users/login' },
    { path: '/users', component: session, children: [{ path: 'login', component: login }, { path: 'register', component: register }] },
    { path: '/user', component: user, children: [{ path: 'updata', component: updata }, { path: 'message', component: message }] },
    { path: '/x', component: x }
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/users/login' || to.path === '/users/register' || to.path === '/' || to.path === '/main' || to.path === '/home') {
    return next()
  } else {
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
      return next('/mainlog/login')
    } else {
      // 后台验证！
      next()
    }
  }
})
export default router
