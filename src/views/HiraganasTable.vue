<script setup lang="ts">
import { kanaTableCols, kanaTableRows, hiraganaTable } from '../store/kana'

import BackLink from '../components/BackLink.vue'
import KanaTableVue from '../components/KanaTable.vue'

const tableCols = kanaTableCols(hiraganaTable)

const tableRows = kanaTableRows(hiraganaTable)
</script>

<template>
  <div>
    <BackLink />

    <div class="container">
      <header class="wrapper wrapper--content-center">
        <h1 class="top-page-title">Hiraganas</h1>
      </header>

      <section class="wrapper wrapper--last">
        <KanaTableVue :kanaTable="hiraganaTable" :tableCols="tableCols" :tableRows="tableRows" :combined="false" />
        <KanaTableVue :kanaTable="hiraganaTable" :tableCols="tableCols" :tableRows="tableRows" :combined="true" />
      </section>
    </div>
  </div>
</template>
