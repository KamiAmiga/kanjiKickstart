import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import KanjisList from './views/KanjisList.vue'
import HiraganasTable from './views/HiraganasTable.vue'
import KatakanasTable from './views/KatakanasTable.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/kanjis',
    name: 'Kanjis',
    component: KanjisList,
  },
  {
    path: '/hiraganas',
    name: 'Hiraganas',
    component: HiraganasTable,
  },
  {
    path: '/katakanas',
    name: 'Katakanas',
    component: KatakanasTable,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router