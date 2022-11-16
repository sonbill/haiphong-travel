import { createStore } from 'vuex';
import Cookies from "js-cookie";
import axios from 'axios';


const store = createStore({
  state: {
    token: Cookies.get('access_token') || '',
    user: null,
    poke: null,
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    poke: state => state.poke,

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_POKE(state, poke) {
      state.poke = poke;
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
              vuexContext.dispatch('getUser')
            }
            resolve(response)
            console.log(response)
          }).catch((error) => {
            // vuexContext.commit("SET_ERRORS", error.response.data);
            console.log(error.response.data)
          });
      })
    },
    async getUser(vuexContext) {
      return new Promise((resolve, reject) => {
        const accessToken = JSON.parse(Cookies.get("access_token"));
        if (accessToken) {
          axios.get("user", {
            headers: { Authorization: `Bearer ${accessToken}` },
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
    async getPoke(vuexContext) {
      return new Promise((resolve, reject) => {
        axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
          .then((response) => {
            console.log(response.data);
            vuexContext.commit('SET_POKE', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            // reject(vuexContext.commit("SET_ERRORS", error.response.data));
          });
      })
    }
  }
})

export default store;