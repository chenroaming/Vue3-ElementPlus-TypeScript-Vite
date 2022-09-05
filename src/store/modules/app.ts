import type { State } from '@/types/store/app'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import asyncRoutes from '@/router/asyncRoutes'
const app = {
  namespaced: true,
  state: ():State => ({
    isCollapse: false, // 侧边菜单栏收缩开关
    asyncRouter: Object.values(asyncRoutes) as NewRouteRecordRaw[]
  }),
  mutations: {
    /**
     * @description: 设置侧边菜单栏收缩开关的方法
     * @param {state} state
     * @return {*}
     * @author: chenroaming
     */
    setCollapse (state:State):void {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {

  },
  getters: {
    isCollapse: (state:State):boolean => state.isCollapse,
    asyncRouter: (state:State):NewRouteRecordRaw[] => state.asyncRouter
  }
}

export default app
