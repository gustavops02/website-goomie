import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/css/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

createApp(App)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')
    