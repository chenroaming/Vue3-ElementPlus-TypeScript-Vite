import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/layout/LayOut.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    }
  ]
})

export default router
