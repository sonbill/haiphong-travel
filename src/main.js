import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/auth.js'
import vueClickOutsideElement from 'vue-click-outside-element'
import BASE_URL from './plugins/axios'
import Datepicker from '@vuepic/vue-datepicker';


import './assets/css/tailwind.css'
import './assets/css/main.css';



// Vue.prototype.$http = axios.baseURL = 'http://localhost:8000/api/'


// const instance = axios.baseURL = 'http://localhost:8000/api/';

const app = createApp(App);
app.use(vueClickOutsideElement);
app.use(BASE_URL);
app.use(router);
app.use(store);
app.component('Datepicker', Datepicker);


app.mount('#app');
