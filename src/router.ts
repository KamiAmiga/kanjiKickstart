import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import KanjisList from './views/KanjisList.vue'
import HiraganasTable from './views/HiraganasTable.vue'
import KatakanasTable from './views/KatakanasTable.vue'
import KanjiItem from './views/KanjiItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/kanjis',
    name: 'kanjis',
    component: KanjisList,
  },
  {
    path: '/hiraganas',
    name: 'hiraganas',
    component: HiraganasTable,
  },
  {
    path: '/katakanas',
    name: 'katakanas',
    component: KatakanasTable,
  },
  {
    path: '/kanjis/:id',
    name: 'kanjiItem',
    component: KanjiItem,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router