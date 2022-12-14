// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { NewRouteRecordRaw } from '@/types/utils/menu'

const routes:NewRouteRecordRaw = {
  path: '/menu4',
  component: Layout,
  name: 'menu4',
  meta: {
    title: '菜单四',
    icon: 'Histogram',
    roles: ['admin', 'editor'],
    isCollapse: false
  },
  redirect: '/menu4/index',
  children: [
    {
      path: '/menu4/index',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单四二级菜单1',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu4_child1'
    }
  ]
}

export default routes
