import { createStore } from 'vuex';
import Cookies from "js-cookie";
import axios from 'axios';
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { ref } from "vue";
import router from '../router';



const store = createStore({
  state: {
    token: Cookies.get('access_token') || '',
    user: null,
    poke: null,
    hotels: null,
    tours: null,
    toursSearched: [],
    tour: null,
    recommended: null,
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    poke: state => state.poke,
    hotels: state => state.hotels,
    tours: state => state.tours,
    tour: state => state.tour,
    toursSearched: state => state.toursSearched,
    recommended: state => state.recommended,


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
    SET_TOUR(state, tour) {
      state.tour = tour;
    },
    SET_TOURS_SEARCHED(state, toursSearched) {
      state.toursSearched = toursSearched;
    },
    SET_RECOMMENDED(state, recommended) {
      state.recommended = recommended;
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
        const tour = {
          id: doc.id,
          city: doc.data().city,
          continents: doc.data().continents,
          country: doc.data().country,
          description: doc.data().description,
          image: doc.data().image,
          price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(doc.data().price),
          saleOff: doc.data().saleOff,
          time: doc.data().time,
          tourName: doc.data().tourName,
          tourPlace: doc.data().tourPlace,
          tourPlan: doc.data().tourPlan,
          tourType: doc.data().tourType,
          discount: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(doc.data().price) - ((parseFloat(doc.data().price) * doc.data().saleOff) / 100))
        };
        fbTours.push(tour);
      });
      vuexContext.commit('SET_TOURS', fbTours);
      // tours.value = fbTours;
      // console.log(tours._rawValue);
    },
    // SEARCH TOUR
    async searchTour(vuexContext, dataSearch) {
      let fbTours = [];

      const q = query(collection(db, "tours"), where("country", "==", dataSearch.where));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const searchedTours = {
          id: doc.id,
          city: doc.data().city,
          continents: doc.data().continents,
          country: doc.data().country,
          description: doc.data().description,
          image: doc.data().image,
          price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(doc.data().price),
          saleOff: doc.data().saleOff,
          time: doc.data().time,
          tourName: doc.data().tourName,
          tourPlace: doc.data().tourPlace,
          tourPlan: doc.data().tourPlan,
          tourType: doc.data().tourType,
          discount: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(doc.data().price) - ((parseFloat(doc.data().price) * doc.data().saleOff) / 100))
        };
        fbTours.push(searchedTours);
      });
      vuexContext.commit('SET_TOURS_SEARCHED', fbTours);
      router.push('/searched')
    },
    async getTour(vuexContext, tourID) {
      const docRef = doc(db, "tours", tourID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const docSnapFormat = {
          id: docSnap.id,
          city: docSnap.data().city,
          continents: docSnap.data().continents,
          country: docSnap.data().country,
          description: docSnap.data().description,
          image: docSnap.data().image,
          price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(docSnap.data().price),
          saleOff: docSnap.data().saleOff,
          time: docSnap.data().time,
          tourName: docSnap.data().tourName,
          tourPlace: docSnap.data().tourPlace,
          tourPlan: docSnap.data().tourPlan,
          tourType: docSnap.data().tourType,
          discount: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(docSnap.data().price) - ((parseFloat(docSnap.data().price) * docSnap.data().saleOff) / 100))
        }
        vuexContext.commit('SET_TOUR', docSnapFormat);

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    async recommended(vuexContext, tourCountry) {
      let fbTours = [];

      const q = query(collection(db, "tours"), where("country", "==", tourCountry));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const recommendedTour = {
          id: doc.id,
          city: doc.data().city,
          continents: doc.data().continents,
          country: doc.data().country,
          description: doc.data().description,
          image: doc.data().image,
          price: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(doc.data().price),
          saleOff: doc.data().saleOff,
          time: doc.data().time,
          tourName: doc.data().tourName,
          tourPlace: doc.data().tourPlace,
          tourPlan: doc.data().tourPlan,
          tourType: doc.data().tourType,
          discount: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseFloat(doc.data().price) - ((parseFloat(doc.data().price) * doc.data().saleOff) / 100))
        };
        fbTours.push(recommendedTour);
      });
      vuexContext.commit('SET_RECOMMENDED', fbTours);
    },

  }
})

export default store;