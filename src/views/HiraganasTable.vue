<script setup lang="ts">
import { kanaTableCols, kanaTableRows, hiraganaTable } from '../store/kana'

import Backlink from '../components/Backlink.vue'
import KanaTableVue from '../components/KanaTable.vue';

const tableCols = kanaTableCols(hiraganaTable)

const tableRows = kanaTableRows(hiraganaTable)
</script>

<template>
  <Backlink />

  <div class="container">
    <header class="wrapper wrapper--content-center">
      <h1>Hiraganas</h1>
    </header>
    
    <section class="wrapper">
      <KanaTableVue
        :kanaTable="hiraganaTable"
        :tableCols="tableCols"
        :tableRows="tableRows">
      </KanaTableVue>
    </section>
  </div>
</template>

<style scoped>
</style>
