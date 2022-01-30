<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ComputedRef } from 'vue'
import { kanjiList, KanjiItem } from '../store'

import Backlink from '../components/Backlink.vue'

const route = useRoute();
const kanjiId = computed(() => route.params.id) as ComputedRef<string>
const kanjiInfos = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value))) as ComputedRef<KanjiItem>
</script>

<template>
  <Backlink destination="Kanjis"/>
  
  <h1>Kanji item</h1>

  <h2>Kanjis infos</h2>

  <dl>
    <dt>Kanji :</dt>
    <dd>{{ kanjiInfos.kanji }}</dd>

    <dt>Translation :</dt>
    <dd>{{ kanjiInfos.translation }}</dd>
    
    <template v-if="kanjiInfos.onyomi.length">
      <dt>Onyomi :</dt>
      <dd>
        <span v-for="onyomi in kanjiInfos.onyomi"
          :key="onyomi">{{ onyomi }}, </span>
      </dd>
    </template>
    
    <template v-if="kanjiInfos.kunyomi.length">
      <dt>Kunyomi :</dt>
      <dd>
        <span v-for="kunyomi in kanjiInfos.kunyomi"
          :key="kunyomi">{{ kunyomi }}, </span>
      </dd>
    </template>
    
    <template v-if="kanjiInfos.examples.length">
      <dt>Exemples :</dt>
      <dd>
        <p v-for="(example, index) in kanjiInfos.examples"
          :key="index">
          {{ example.kanji }} ({{ example.romaji }}) <br/>
          {{ example.translation }}
        </p>
      </dd>
    </template>
  </dl>
</template>

<style scoped>
</style>
