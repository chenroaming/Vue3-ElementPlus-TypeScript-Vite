// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { NewRouteRecordRaw } from '@/types/utils/menu'

const routes:NewRouteRecordRaw = {
  path: '/menu2',
  component: Layout,
  name: 'menu2',
  meta: {
    title: '菜单二',
    icon: 'UserFilled',
    roles: ['admin', 'editor'],
    isCollapse: false
  },
  children: [
    {
      path: '/menu2',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单二子菜单1',
        roles: ['admin', 'editor'],
        icon: 'Grid'
      },
      name: 'menu2_child1'
    }
  ]
}

export default routes
