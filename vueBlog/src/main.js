import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js' // 引用外部UI
import 'normalize.css/normalize.css' // 初始化样式
import './icons' // 图标库
import '@/components/CopyBoard' // 复制插件
import './permission' // permission control

// 配置图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    preLoad:1.3,
    attempt:1,
    loading:require('./assets/image/imgError.png'),
    error:require('./assets/image/imgError.png')
})

Vue.config.productionTip = false
Vue.prototype.$src = process.env.VUE_APP_PUBLIC_PATH

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
