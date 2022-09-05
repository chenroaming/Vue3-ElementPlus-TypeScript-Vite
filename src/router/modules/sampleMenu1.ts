// 示例菜单1
import Layout from '@/layout/LayOut.vue'
import type { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw = {
  path: '/menu1',
  component: Layout,
  redirect: '/menu1/child1',
  name: 'menu1',
  meta: {
    title: '菜单一',
    icon: 'Grid',
    roles: ['admin', 'editor'],
    isCollapse: false
  },
  children: [
    {
      path: '/menu1/child1',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单一',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu1_child1'
    }
  ]
}

export default routes