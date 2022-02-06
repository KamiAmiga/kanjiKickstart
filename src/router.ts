import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import KanjisList from './views/KanjisList.vue'
import HiraganasTable from './views/HiraganasTable.vue'
import KatakanasTable from './views/KatakanasTable.vue'
import KanjiItem from './views/KanjiItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/kanjis',
    name: 'Kanjis',
    component: KanjisList
  },
  {
    path: '/hiraganas',
    name: 'HiraganasTable',
    component: HiraganasTable
  },
  {
    path: '/katakanas',
    name: 'KatakanasTable',
    component: KatakanasTable
  },
  {
    path: '/kanjis/:id',
    name: 'Kanji',
    component: KanjiItem,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router