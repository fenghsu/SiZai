import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import "bootstrap-icons/font/bootstrap-icons.css"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/frontlayout/AboutView.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/frontlayout/CartView.vue')
    },
    {
      path: '/product/:id',
      component: () => import('../views/frontlayout/ProductView.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/admin/DashboardView.vue'),
      children: [
        {
          path: 'product',
          component: () => import('../views/admin/AdminProduct.vue')
        },
        {
          path: 'place',
          component: () => import('../views/admin/AdminPlace.vue')
        }
      ]
    }
  ]
})

export default router
