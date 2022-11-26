import { createStore } from 'vuex';
import Cookies from "js-cookie";
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { ref } from "vue";



const store = createStore({
  state: {
    token: Cookies.get('access_token') || '',
    user: null,
    poke: null,
    hotels: null,
    tours: null
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    poke: state => state.poke,
    hotels: state => state.hotels,
    tours: state => state.tours

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
    SET_HOTELS(state, hotels) {
      state.hotels = hotels;
    },
    SET_TOURS(state, tours) {
      state.tours = tours;
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
    },
    async getHotels(vuexContext, hotels) {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'GET',
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation',
          params: { query: hotels },
          headers: {
            'X-RapidAPI-Key': 'e491b38cdamshe2872c263d7a4bdp10d663jsn67d754324127',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
          }
        };
        axios.request(options)
          .then((response) => {
            console.log(response);
            vuexContext.commit('SET_HOTELS', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            // reject(vuexContext.commit("SET_ERRORS", error.response.data));
          });
      })
    },
    // GET TOUR
    async getTours(vuexContext) {
      const querySnapshot = await getDocs(collection(db, "tours"));
      let fbTours = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const tour = {
          id: doc.id,
          city: doc.data().city,
          continents: doc.data().continents,
          country: doc.data().country,
          description: doc.data().description,
          image: doc.data().image,
          price: doc.data().price,
          saleOff: doc.data().saleOff,
          time: doc.data().time,
          tourName: doc.data().tourName,
          tourPlace: doc.data().tourPlace,
          tourPlan: doc.data().tourPlan,
          tourType: doc.data().tourType,
          // discount:
          //   doc.data().price - (doc.data().price * doc.data().saleOff) / 100,
        };
        fbTours.push(tour);
      });
      vuexContext.commit('SET_TOURS', fbTours);
      // tours.value = fbTours;
      // console.log(tours._rawValue);
    },

  }
})

export default store;