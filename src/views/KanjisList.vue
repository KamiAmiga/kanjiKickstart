<script setup lang="ts">
import { kanjiList } from '../store/kanji'

import Backlink from '../components/Backlink.vue'
</script>

<template>
  <Backlink />

  <div class="container">
    <header class="wrapper  wrapper--content-center">
      <h1>Kanjis</h1>
    </header>

    <section class="wrapper">
      <ul>
        <li v-for="kanjiItem in kanjiList" :key="kanjiItem.id">
          <router-link :to="{ name: 'Kanji', params: { id: kanjiItem.id }}">
            <span class="text-jp" lang="jp">{{ kanjiItem.kanji }}</span>
            {{ kanjiItem.translation }}
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
</style>
