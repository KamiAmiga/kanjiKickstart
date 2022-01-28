<script setup lang="ts">
import { kanjiList } from '../store'

import Backlink from '../components/Backlink.vue'
</script>

<template>
  <Backlink />

  <ul>
    <li v-for="kanjiItem in kanjiList" :key="kanjiItem.id">
      <router-link :to="{ name: 'kanjiItem', params: { id: kanjiItem.id }}">
        {{ kanjiItem.kanji }}
        {{ kanjiItem.translation }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
</style>
