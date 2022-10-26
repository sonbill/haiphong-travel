import { createStore } from 'vuex';
import Cookies from "js-cookie";
import axios from 'axios';


const store = createStore({
  state: {
    token: Cookies.get('access_token') || '',
    user: null,
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    async authenticate(vuexContext, credentials) {
      return new Promise((resolve, reject) => {
        // check login or register
        let authUrlApi = "login"
        if (!credentials.isLogin) {
          authUrlApi = "register"
        }
        return axios.post(authUrlApi, credentials)
          .then((response) => {
            const token = response.data.access_token
            if (token) {
              Cookies.set(
                "access_token",
                JSON.stringify(token), { expires: 1 }
              );
              vuexContext.commit('SET_TOKEN', token)
              // this.$router.push('/admin/dashboard')
              vuexContext.dispatch('getUser', token)
            }
            resolve(response)
            console.log(response)
          }).catch((error) => {
            // vuexContext.commit("SET_ERRORS", error.response.data);
            console.log(error.response.data)
          });
      })
    },
    async getUser(vuexContext, token) {
      return new Promise((resolve, reject) => {
        // const accessToken = JSON.parse(Cookies.get("access_token"));
        if (token) {
          axios.get("user", {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((response) => {
              vuexContext.commit('SET_USER', response.data);
              resolve(response.data)
            })
            .catch((error) => {
              // reject(vuexContext.commit("SET_ERRORS", error.response.data));
            });
        }
      })
    },
  }
})

export default store;