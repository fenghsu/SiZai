import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";

import App from './App.vue'
import router from './router'
import './assets/all.scss'


const app = createApp(App)
 
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCNcTgQjki9BtrO6Elvji4sD9aXnM_v7A4',
    },
})
app.use(PrimeVue)
app.component('VueLoading', Loading)
app.mount('#app')
