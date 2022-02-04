<script setup lang="ts">
import { kanaTableCols, kanaTableRows, katakanaTable } from '../store/kana'

import Backlink from '../components/Backlink.vue'
import KanaTableVue from '../components/KanaTable.vue';

const tableCols = kanaTableCols(katakanaTable)

const tableRows = kanaTableRows(katakanaTable)
</script>

<template>
  <Backlink />

  <div class="container">    
    <header class="wrapper wrapper--content-center">
      <h1>Katakanas</h1>
    </header>
    
    <section class="wrapper">
      <KanaTableVue
        :kanaTable="katakanaTable"
        :tableCols="tableCols"
        :tableRows="tableRows">
      </KanaTableVue>
    </section>
  </div>
</template>

<style scoped>
</style>
