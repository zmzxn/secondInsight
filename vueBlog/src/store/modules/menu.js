/*
 * @Author: zhangmeng 
 * @Date: 2020-12-11 23:32:20 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-12 23:04:16
 */
import { constantRouterMap } from '@/router'
const menu = {
  state: {
    routerList: constantRouterMap[0].children // 路由数据
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      console.log(state, routers)
      state.routerList = routers
    }
  },
  actions: {
    SET_ROUTERS({ commit }, data) {
      commit('SET_ROUTERS', data)
  },
  }
}

export default menu