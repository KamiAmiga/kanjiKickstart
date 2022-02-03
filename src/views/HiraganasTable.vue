<script setup lang="ts">
import { kanaTableCols, kanaTableRows, hiraganaTable } from '../store/kana'

import Backlink from '../components/Backlink.vue'
import KanaTableVue from '../components/KanaTable.vue';

const tableCols = kanaTableCols(hiraganaTable)

const tableRows = kanaTableRows(hiraganaTable)
</script>

<template>
  <Backlink />
  <h1>Hiragana table</h1>
  
  <KanaTableVue
    :kanaTable="hiraganaTable"
    :tableCols="tableCols"
    :tableRows="tableRows">
  </KanaTableVue>
</template>

<style scoped>
</style>
