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

  <dl>
    <template v-if="kanjiInfos.onyomi.length">
      <dt>Onyomi :</dt>
      <dd>
        <span v-for="onyomi in kanjiInfos.onyomi"
          :key="onyomi"
          lang="jp">{{ onyomi }}, </span>
      </dd>
    </template>
    
    <template v-if="kanjiInfos.kunyomi.length">
      <dt>Kunyomi :</dt>
      <dd>
        <span v-for="kunyomi in kanjiInfos.kunyomi"
          :key="kunyomi"
          lang="jp">{{ kunyomi }}, </span>
      </dd>
    </template>
    
    <template v-if="kanjiInfos.examples.length">
      <dt>Exemples :</dt>
      <dd>
        <p v-for="(example, index) in kanjiInfos.examples"
          :key="index">
          <span lang="jp">
            {{ example.kanji }}
          </span>
           ({{ example.romaji }}) <br/>
          {{ example.translation }}
        </p>
      </dd>
    </template>
  </dl>

  <template v-if="nextKanjiId">
    <NextKanjiLink :kanjiId="nextKanjiId"/>
  </template>
</template>

<style scoped>
</style>
