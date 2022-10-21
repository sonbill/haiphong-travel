import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Login from '../views/Auth/Login.vue'
import auth from '../middleware/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        middleware: [auth]
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
