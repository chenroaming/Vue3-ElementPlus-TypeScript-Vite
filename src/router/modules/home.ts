import Layout from '@/layout/LayOut.vue'
import type { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  meta: { title: '首页', roles: ['admin', 'editor'] },
  children: [
    {
      path: '/dashboard',
      name: 'Home',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: { title: '主页面', roles: ['admin', 'editor'], icon: 'Grid' }
    }
  ]
}

export default routes
