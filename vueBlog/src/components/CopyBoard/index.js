import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 复制小插件组件
import CopyBoard from '@/components/CopyBoard/index.vue'

// 注册到全局
Vue.component('copy-board', CopyBoard)
