import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import Toaster from '@meforma/vue-toaster'

const app = createApp(App)

app.use(Toaster, {
  position: 'top-right',
})

app.mount('#app')
