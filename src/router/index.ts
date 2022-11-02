import { createRouter, createWebHashHistory } from 'vue-router'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
import NotFound from '@/views/NotFound/NotFound.vue'
import asyncRoutes from './asyncRoutes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...Object.values(asyncRoutes) as NewRouteRecordRaw[],
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
