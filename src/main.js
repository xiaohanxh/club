import Vue from 'vue'
import App from './App.vue'
import router from './router'
// md文件处理
import marked from 'marked'
// 导入字体图标
// 导入全局样式
import './assets/global.css'
// axios请求
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'http://192.168.0.108:5000/'
// axios请求拦截器
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
Vue.prototype.$md = marked
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
