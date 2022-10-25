import { createRouter, createWebHashHistory } from 'vue-router'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import asyncRoutes from './asyncRoutes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...Object.values(asyncRoutes) as NewRouteRecordRaw[]]
})

export default router
