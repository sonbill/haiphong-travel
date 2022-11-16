import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/Contact.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import PageNotFound from '../components/PageNotFound.vue'
import DetailTour from '../views/Tours/DetailTour.vue'
import HotelsHomePage from '../views/Hotels/HotelsHomePage.vue'

import UserLayout from '../layouts/UserLayout.vue'


import store from '../store/store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // SEARCH HOTELS
    {
      path: '/hotels',
      name: "HotelsHomePage",
      component: HotelsHomePage,
      meta: { layout: UserLayout }
    },
    // DETAIL TOUR
    {
      path: '/pokemon',
      name: 'DetailTour',
      component: DetailTour,
      meta: { layout: UserLayout }
    },
    // HOME
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: UserLayout }
    },
    // CONTACT
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView,
      meta: { auth: false, layout: UserLayout }
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true,
        layout: UserLayout
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
      component: Register,
      meta: { auth: false },
      beforeEnter: (async (to, from, next) => {
        const token = await store.getters['token']
        if (token && to.meta.auth === false) next({ name: 'home' })
        next();
      })
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: PageNotFound,
    }

  ]
})

// router.beforeEach(async (to, from, next) => {
//   console.log(to)
//   const token = store.getters['token']
//   if (
//     // make sure the user is authenticated
//     !token &&
//     // ❗️ Avoid an infinite redirect
//     to.name === 'dashboard'
//   ) {
//     // redirect the user to the login page
//     next({ name: 'login' })
//   } else if (token && to.name === 'login' || to.name === 'register') {
//     next(false)
//   } else {
//     next();
//   }
// })

export default router;


