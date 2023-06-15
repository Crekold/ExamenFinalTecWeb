import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Pagina1 from './components/Pagina1.vue';
import Pagina2 from './components/Pagina2.vue'
import Pagina3 from './components/Pagina3.vue'
import Pagina4 from './components/Pagina4.vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
//import { faTachometerAlt, faUserPlus, faPlusCircle, faShoppingCart, faPercent, faClipboardList, faChartLine, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const routes = [
    {
        name: 'Inicio',
        path: '/',
        component: Pagina1
      },
    {
      name: 'Instrumental',
        path: '/pagina2',
        component: Pagina2
    },
    {
      name: 'Registro',
        path: '/pagina3',
        component: Pagina3
    },
    {
      name: 'Contacto',
        path: '/pagina4',
        component: Pagina4
    }
      ]
library.add(fas);
dom.watch();

const router = createRouter({
  history: createWebHistory(),
  routes
})


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(VueSweetalert2).mount('#app')
 