import type { State } from '@/types/store/user'
import Cookie from 'js-cookie'
import asyncRoutes from '@/router/asyncRoutes'
import { getRoles } from '@/api/user'
import type { ActionContext } from 'vuex'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import type { RootState } from '@/types/store/rootState'
const hasPermission = (route:NewRouteRecordRaw, roles:string[]):boolean => {
  // 判断单个路由中的角色是否包含在角色列表中，或者为any即所有角色均可访问
  return (route?.meta?.roles?.some(el => roles.includes(el)) || route?.meta?.roles?.includes('any')) ?? false
}
const filterRoutes = (routes:NewRouteRecordRaw[], roles:string[]):NewRouteRecordRaw[] => {
  // 递归过滤出具备权限的菜单
  const asyncRoutes = routes.filter(el => {
    if (el.children && el.children.length > 0) {
      el.children = filterRoutes(el.children, roles)
    }
    return hasPermission(el, roles)
  })
  return asyncRoutes
}
const user = {
  namespaced: true,
  state: ():State => ({
    isLogin: false,
    token: '',
    roles: []
  }),
  mutations: {
    setLogin (state:State, status:boolean) {
      state.isLogin = status
    },
    setToken (state:State, token:string) {
      state.token = token
    },
    setRoles (state:State, roles:string[]) {
      state.roles = roles
    }
  },
  actions: {
    setLogin (context:ActionContext<State, RootState>, token:string) {
      // 设置登录状态和token
      context.commit('setLogin', true)
      context.commit('setToken', token)
      // 设置登录token的cookie，有效期可自定义
      Cookie.set('Vue3-ElementPlus-TypeScript-Vite-token', token, { expires: 3 })
    },
    setRoles (context:ActionContext<State, RootState>, roles:string[]) {
      context.commit('setRoles', roles)
    },
    logout (context:ActionContext<State, RootState>) {
      // 设置登录状态为false
      context.commit('setLogin', false)
      // 清空token
      context.commit('setToken', '')
      Cookie.remove('Vue3-ElementPlus-TypeScript-Vite-token')
      location.reload()
    },
    getRoles (context:ActionContext<State, RootState>) {
      return new Promise((resolve, reject) => {
        getRoles().then((res) => {
          context.commit('setRoles', res.data.data)
          const asyncRoute = filterRoutes(Object.values(asyncRoutes) as NewRouteRecordRaw[], res.data.data)
          resolve(asyncRoute)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  getters: {
    isLogin: (state:State) => state.isLogin,
    roles: (state:State) => state.roles
  }
}

export default user
