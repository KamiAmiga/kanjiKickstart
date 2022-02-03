<script setup lang="ts">
import { kanjiList } from '../store/kanji'

import Backlink from '../components/Backlink.vue'
</script>

<template>
  <Backlink />

  <header class="wrapper  wrapper--content-center">
    <h1>Kanjis</h1>
  </header>

  <section class="wrapper">
    <ul>
      <li v-for="kanjiItem in kanjiList" :key="kanjiItem.id">
        <router-link :to="{ name: 'Kanji', params: { id: kanjiItem.id }}">
          <span lang="jp">{{ kanjiItem.kanji }}</span>
          {{ kanjiItem.translation }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>
