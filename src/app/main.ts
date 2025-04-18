import './main.css'

import { createApp } from 'vue'
import router from './routing'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
