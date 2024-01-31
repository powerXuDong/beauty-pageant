import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Request } from '@/assets/http'

const app = createApp(App)

app.config.globalProperties.$http = Request;

app.use(createPinia())
app.use(router)

app.mount('#app')
