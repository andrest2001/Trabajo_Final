import { createRouter, createWebHashHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue'
import VistaLogin from '../views/VistaLogin.vue'
import VistaRegistro from '../views/VistaRegistro.vue'
import VistaContacto from '../views/VistaContacto.vue'
import VistaRestablecer from '../views/VistaRestablecer.vue'
import VistaJuegos from '../views/VistaJuegos.vue'
import VistaJuegoscompleta from '../views/VistaJuegoscompleta.vue'
import VistaDetalles from '../views/VistaDetalles.vue'
import VistaWikis from '../views/VistaWikis.vue'
const routes = [
  {
    path: '/',
    name: 'VistaInicio',
    component: VistaInicio
  },
  {
    path: '/games/:genre_id',
    name: 'VistaJuegoscompleta',
    component: VistaJuegoscompleta
  },
  {
    path: '/login',
    name: 'VistaLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VistaLogin
  },
  {
    path: '/registro',
    name: 'VistaRegistro',
    component: VistaRegistro
  },
  {
    path: '/contacto',
    name: 'VistaContacto',
    component: VistaContacto
  },
  {
    path: '/restablecer',
    name: 'VistaRestablecer',
    component: VistaRestablecer
  },
  {
    path: '/juegos',
    name: 'VistaJuegos',
    component: VistaJuegos
  },
  {
    path: '/details/:game_id',
    name: 'VistaDetalles',
    component: VistaDetalles
  },
  {
    path:'/wikis/:game_id',
    name:'VistaWikis',
    component: VistaWikis
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
