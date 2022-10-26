import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import auth from '../middleware/auth'
// import guest from '../middleware/guest'
import store from '../store/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: {
      //   middleware: [
      //     auth
      //   ]
      // },
      meta: {
        auth: true
      },
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      // meta: {
      //   auth: true
      // },
      beforeEnter: async (to, from, next) => {
        const user = await store.getters["auth/user"]
        if (!user) {
          return next({
            name: 'login'
          });
        }
        return next({ name: 'dashboard' })
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // meta: {
      //   middleware: [auth]
      // }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router;
