/*
 * @Author: zhangmeng 
 * @Date: 2020-12-11 23:28:49 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-11 23:32:48
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu
  },
  getters
})

export default store