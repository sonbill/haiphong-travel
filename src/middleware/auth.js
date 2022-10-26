import router from '../router/index'; //this-is: file router default, quy định các route.
import store from '../store/auth'; // this-is: dùng để lấy dữ liệu từ Vuex.



export default function auth({ next, store }) {
  console.log(store.getters)

  // const user = computed(async () => store.getters["auth/user"])
  // if (!user) {
  //   return next({
  //     name: 'login'
  //   })
  // }
  // return next()
}

// export default function auth({ next, router }) {
//   return next();
// }