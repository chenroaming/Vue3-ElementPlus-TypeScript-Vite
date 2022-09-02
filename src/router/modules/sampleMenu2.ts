// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw = {
  path: '/menu2',
  component: Layout,
  name: 'menu2',
  redirect: '/menu2/child1',
  meta: {
    title: '菜单二',
    icon: 'Grid',
    roles: ['admin', 'editor'],
    isCollapse: false
  },
  children: [
    {
      path: '/menu2/child1',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单二',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu2_child1'
    }
  ]
}

export default routes
