import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vueClickOutsideElement from 'vue-click-outside-element'

import './assets/tailwind.css'
import './assets/main.css';

const app = createApp(App);
app.use(vueClickOutsideElement)


app.use(router);

app.mount('#app');
