<script setup lang="ts">
import { kanaTableCols, kanaTableRows, katakanaTable } from '../store/kana'

import BackLink from '../components/BackLink.vue'
import KanaTableVue from '../components/KanaTable.vue';

const tableCols = kanaTableCols(katakanaTable)

const tableRows = kanaTableRows(katakanaTable)
</script>

<template>
  <div>
    <BackLink />
  
    <div class="container">    
      <header class="wrapper wrapper--content-center">
        <h1 class="top-page-title">Katakanas</h1>
      </header>
      
      <section class="wrapper wrapper--last">
        <KanaTableVue
          :kanaTable="katakanaTable"
          :tableCols="tableCols"
          :tableRows="tableRows">
        </KanaTableVue>
      </section>
    </div>
  </div>
</template>
