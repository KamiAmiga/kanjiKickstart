<script setup lang="ts">
import { kanaTableCols, kanaTableRows, katakanaTable } from '../store/kana'

import Backlink from '../components/Backlink.vue'
import KanaTableVue from '../components/KanaTable.vue';

const tableCols = kanaTableCols(katakanaTable)

const tableRows = kanaTableRows(katakanaTable)
</script>

<template>
  <Backlink />
  <h1>Hiragana table</h1>
  
  <KanaTableVue
    :kanaTable="katakanaTable"
    :tableCols="tableCols"
    :tableRows="tableRows">
  </KanaTableVue>
</template>

<style scoped>
</style>
