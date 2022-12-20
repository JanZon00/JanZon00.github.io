import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVue.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginVue.vue'),
    meta: {transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterVue.vue'),
    meta: {transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/trening',
    name: 'trening',
    component: () => import('../views/TreningVue.vue'),
    meta: { transition: 'slide', mode: 'default'},
  },
  {
    path: '/palowanie',
    name: 'palowanie',
    component: () => import('../views/PalowanieVue.vue'),
    meta: { transition: 'slide', mode: 'default'},
  },
  {
    path: '/wyniki',
    name: 'wyniki',
    component: () => import('../views/WynikiVue.vue'),
    meta: { transition: 'slide', mode: 'default'},
  },
  {
    path: '/ustawienia',
    name: 'ustawienia',
    component: () => import('../views/UstawieniaVue.vue'),
    meta: { transition: 'slide', mode: 'default'},
  },
  {
    path: '/palowanie/liczby',
    name: 'liczby',
    component: () => import('../views/NumbersVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/palowanie/binarne',
    name: 'binarne',
    component: () => import('../views/BinaryVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/palowanie/karty',
    name: 'karty',
    component: () => import('../views/CardsVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  },
  {
    path: '/palowanie/litery',
    name: 'litery',
    component: () => import('../views/LettersVue.vue'),
    meta: { transition: 'grow-in', mode: 'out-in'},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
