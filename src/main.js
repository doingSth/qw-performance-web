// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './less/main.less'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
// import PageList from './pages/PageList'
import App from './App.vue'
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: App }
  ]
})
import store from './store/index.js'
new Vue({
  store,
  router
}).$mount('#app')

