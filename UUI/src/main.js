// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import publicstyle from './assets/css/public.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import iconfontStyle from './assets/css/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
