import { createRouter, createWebHashHistory } from 'vue-router'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import asyncRoutes from './asyncRoutes'
const Layout = () => import('@/layout/LayOut.vue')
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    ...Object.values(asyncRoutes) as NewRouteRecordRaw[]
  ]
})

export default router
