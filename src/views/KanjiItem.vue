<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ComputedRef } from 'vue'
import { kanjiList, KanjiItem } from '../store'

import Backlink from '../components/Backlink.vue'
import NextKanjiLink from '../components/NextKanjiLink.vue'

const route = useRoute();
const kanjiId = computed(() => route.params.id) as ComputedRef<string>
const kanjiInfos = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value))) as ComputedRef<KanjiItem>
const nextKanjiId = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value) + 1)?.id) as ComputedRef<number | undefined>
</script>

<template>
  <Backlink destination="Kanjis"/>
  
  <h1>
    <span lang="jp">{{ kanjiInfos.kanji }}</span>
    <span>{{ kanjiInfos.translation }}</span>
  </h1>

  <h2>Prononciations</h2>

  <ul>
    <li v-for="(onyomi, index) in kanjiInfos.onyomi"
      :key="index">
      <span lang="jp">{{ onyomi.kana }}</span>
      <span>{{ onyomi.romaji }}</span>
    </li>

    <li v-for="(kunyomi, index) in kanjiInfos.kunyomi"
      :key="index">
      <span lang="jp">{{ kunyomi.kana }}</span>
      <span>{{ kunyomi.romaji }}</span>
    </li>
  </ul>

  <template v-if="kanjiInfos.examples.length">
    <h2>Exemples</h2>

    <dl>
      <template v-for="(example, index) in kanjiInfos.examples"
        :key="index">
        <dt>
          <div lang="jp">{{ example.kanji }}</div>
          <div>{{ example.romaji }}</div>
        </dt>
        <dd>
          {{ example.translation }}
        </dd>
      </template>
    </dl>
  </template>

  <template v-if="nextKanjiId">
    <NextKanjiLink :kanjiId="nextKanjiId"/>
  </template>
</template>

<style scoped>
</style>
