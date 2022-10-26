import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'


import store from '../store/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: true
      },
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      },
      beforeEnter: (async (to, from, next) => {
        const token = await store.getters['token']
        if (!token && to.meta.auth === true) {
          next({ name: 'login' });
        }
        next();
      })
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { auth: false },
      beforeEnter: (async (to, from, next) => {
        const token = await store.getters['token']
        if (token && to.meta.auth === false) next({ name: 'home' })
        next();
      })
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  console.log(to)
  const token = store.getters['token']
  if (
    // make sure the user is authenticated
    !token &&
    // ❗️ Avoid an infinite redirect
    to.name === 'dashboard'
  ) {
    // redirect the user to the login page
    next({ name: 'login' })
  } else if (token && to.name === 'login' || to.name === 'register') {
    next(false)
  } else {
    next();
  }
})

export default router;


