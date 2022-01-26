<script setup lang="ts">
import { ref, Ref } from 'vue'
import { kanjiList } from '../store'
import Backlink from '../components/Backlink.vue'

const selectedKanji: Ref<number | null> = ref(null)

function selectKanji(kanjiId: number) {
  selectedKanji.value = kanjiId;
}
</script>

<template>
  <Backlink />

  <div class="kanji-item"
    v-for="kanjiItem in kanjiList"
    :key="kanjiItem.id"
    @click="selectKanji(kanjiItem.id)">
    {{ kanjiItem.kanji }}
    {{ kanjiItem.translation }}
  </div>

  <div v-if="selectedKanji !== null">
    <p>Selected kanji infos</p>
    <dl>
      <dt>Kanji :</dt>
      <dd>{{ kanjiList[selectedKanji].kanji }}</dd>

      <dt>Translation :</dt>
      <dd>{{ kanjiList[selectedKanji].translation }}</dd>
      
      <template v-if="kanjiList[selectedKanji].onyomi.length">
        <dt>Onyomi :</dt>
        <dd>
          <span v-for="onyomi in kanjiList[selectedKanji].onyomi"
            :key="onyomi">{{ onyomi }}, </span>
        </dd>
      </template>
      
      <template v-if="kanjiList[selectedKanji].kunyomi.length">
        <dt>Kunyomi :</dt>
        <dd>
          <span v-for="kunyomi in kanjiList[selectedKanji].kunyomi"
            :key="kunyomi">{{ kunyomi }}, </span>
        </dd>
      </template>
      
      <template v-if="kanjiList[selectedKanji].examples.length">
        <dt>Exemples :</dt>
        <dd>
          <p v-for="(example, index) in kanjiList[selectedKanji].examples"
            :key="index">
            {{ example.kanji }} ({{ example.romaji }}) <br/>
            {{ example.translation }}
          </p>
        </dd>
      </template>
    </dl>
  </div>
</template>

<style scoped>
</style>
