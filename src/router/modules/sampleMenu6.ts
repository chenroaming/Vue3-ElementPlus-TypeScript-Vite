// 示例菜单2
import Layout from '@/layout/LayOut.vue'
import type { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw = {
  path: '/menu6',
  component: Layout,
  name: 'menu6',
  meta: {
    title: '菜单六',
    icon: 'Promotion',
    roles: ['admin'],
    isCollapse: true
  },
  redirect: '/menu6/index',
  children: [
    {
      path: '/menu6/index',
      component: () => import('@/views/dashboard/dashBoard.vue'),
      meta: {
        title: '菜单六子菜单1',
        roles: ['admin'],
        icon: 'Grid',
        isCollapse: true
      },
      name: 'menu6_child1',
      children: [
        {
          path: '/menu6/index/child1',
          component: () => import('@/views/dashboard/dashBoard.vue'),
          meta: {
            title: '菜单六第三级菜单1',
            roles: ['admin'],
            icon: 'Grid'
          },
          name: 'menu6_child1_1'
        },
        {
          path: '/menu6/index/child2',
          component: () => import('@/views/dashboard/dashBoard.vue'),
          meta: {
            title: '菜单六第三级菜单2',
            roles: ['admin'],
            icon: 'Grid'
          },
          name: 'child6-1-2'
        },
        {
          path: '/menu6/index/child3',
          component: () => import('@/views/dashboard/dashBoard.vue'),
          meta: {
            title: '菜单六第三级菜单3',
            roles: ['admin'],
            icon: 'Grid'
          },
          name: 'menu6_child1_3'
        },
        {
          path: '/menu6/index/child4',
          component: () => import('@/views/dashboard/dashBoard.vue'),
          meta: {
            title: '菜单六第三级菜单4',
            roles: ['admin'],
            icon: 'Grid'
          },
          name: 'menu6_child1_4'
        },
        {
          path: '/menu6/index/child5',
          component: () => import('@/views/dashboard/dashBoard.vue'),
          meta: {
            title: '菜单六第三级菜单5',
            roles: ['admin'],
            icon: 'Grid'
          },
          name: 'menu6_child1_5'
        }
      ]
    }
  ]
}

export default routes
