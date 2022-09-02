// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw = {
  path: '/menu3',
  component: Layout,
  name: 'menu3',
  redirect: '/menu3/child1',
  meta: {
    title: '菜单三',
    icon: 'Grid',
    roles: ['admin', 'editor'],
    isCollapse: true
  },
  children: [
    {
      path: '/menu3/child1',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单三子菜单1',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu3_child1'
    },
    {
      path: '/menu3/child2',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单三子菜单2',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu3_child2'
    }
  ]
}

export default routes
