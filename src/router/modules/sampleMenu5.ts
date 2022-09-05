// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { NewRouteRecordRaw } from '@/types/utils/menu'

const routes:NewRouteRecordRaw = {
  path: '/menu5',
  component: Layout,
  name: 'menu5',
  meta: {
    title: '菜单五',
    icon: 'StarFilled',
    roles: ['admin'],
    isCollapse: true
  },
  children: [
    {
      path: '/menu5',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单五子菜单1',
        roles: ['admin'],
        icon: 'Grid'
      },
      name: 'menu5_child1'
    },
    {
      path: '/menu5/child1',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单五子菜单2',
        roles: ['admin'],
        icon: 'Grid'
      },
      name: 'menu5_child2'
    },
    {
      path: '/menu5/child3',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单五子菜单3',
        roles: ['admin'],
        icon: 'Grid'
      },
      name: 'menu5_child3'
    }
  ]
}

export default routes
