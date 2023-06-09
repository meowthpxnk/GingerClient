import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies';

const store = createPinia()

createApp(App).use(store).use(router).use(VueCookies).mount('#app')
