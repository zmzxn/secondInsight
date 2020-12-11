/*
 * @Author: zhangmeng 
 * @Date: 2020-12-11 23:32:20 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-11 23:52:56
 */
import { constantRouterMap } from '@/router'
const menu = {
  state: {
    routerList: constantRouterMap // 路由数据
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
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