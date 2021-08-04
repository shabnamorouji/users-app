import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import loader from "vue-ui-preloader";

createApp(App).use(router).use(Toast).use(loader).mount('#app');
