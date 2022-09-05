import Layout from '@/layout/LayOut.vue'
import type { NewRouteRecordRaw } from '@/types/utils/menu'
const routes:NewRouteRecordRaw = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  meta: { title: '首页', roles: ['admin', 'editor'], icon: 'HomeFilled' },
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
