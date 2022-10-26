export default function guest({ next, store }) {
  // let isLoggedIn = false // Can be calculated through store
  let user = computed(async () => store.getters["auth/user"])

  if (to.matched.some((record) => record.meta.requiresAuth) && user) {
    return next({
      name: 'home',
      path: '/'
    })
  }

  return next();
}