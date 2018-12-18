// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from '../axios/api.js'
import echarts from 'echarts'
// import liquidfill from 'echarts-liquidfill'
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
