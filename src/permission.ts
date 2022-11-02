import router from '@/router'
import NProgress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css' // 引入进度条样式
import Cookie from 'js-cookie'
import store from '@/store'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
// 白名单路径
const whiteList:string[] = ['/login']
// vue-router4.x不再推荐使用next()，推荐使用return的方式进行下一步导航操作
// 参见：https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%8F%AF%E9%80%89%E7%9A%84%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0-next
router.beforeEach(async to => {
  // 开始加载显示进度条
  NProgress.start()
  const hasToken = Cookie.get('Vue3-ElementPlus-TypeScript-Vite-token')
  const { path } = to
  const hasRoles = store.getters['user/roles'].length > 0
  if (hasToken) {
    // 有token并且已获取动态路由，前往登录页时重定向到主页，否则继续前往目标页面
    if (hasRoles) return path === '/login' ? '/' : true
    // 没有用户角色时，需要获取用户角色，然后过滤出相应的异步路由表
    const asyncRoutes = await store.dispatch('user/getRoles')
    // 将处理好的异步路由保存至vuex
    store.commit('app/setAsyncRoutes', asyncRoutes)
    asyncRoutes.forEach((item:NewRouteRecordRaw) => {
      // vue-router4.x开始不再支持router.addRoutes，需要用addRoute一个个添加路由。
      // 参考：https://next.router.vuejs.org/zh/guide/advanced/dynamic-routing.html#%E6%B7%BB%E5%8A%A0%E8%B7%AF%E7%94%B1
      router.addRoute(item)
    })
    // 有token且有用户角色时且具备动态路由表，并且跳转路径非登录页，则前往目标页
    return { ...to, replace: true }
  }
  // 无token，但在白名单内，则直接跳转，否则跳转至登录页
  return whiteList.includes(path) ? true : '/login'
})

router.afterEach(() => {
  // 进入下一个路由后，则停止显示加载进度条
  NProgress.done()
})
