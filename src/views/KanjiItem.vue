<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ComputedRef } from 'vue'
import { kanjiList } from '../store/kanji'
import { KanjiItem } from '../types/kanji'

import BackLink from '../components/BackLink.vue'
import NextKanjiLink from '../components/NextKanjiLink.vue'
import CardWrapper from '../components/CardWrapper.vue'

const route = useRoute();
const kanjiId = computed(() => route.params.id) as ComputedRef<string>
const kanjiInfos = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value))) as ComputedRef<KanjiItem>
const nextKanjiId = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value) + 1)?.id) as ComputedRef<number | undefined>
</script>

<template>
  <div>
    <BackLink destination="Kanjis"/>
    
    <div class="container">
      <div class="kanji-item wrapper wrapper--2-cols">
        <header>    
          <h1 class="wrapper wrapper--content-center">
            <CardWrapper type="outer">
              <span class="kanji-item__kanji text-jp" lang="jp">{{ kanjiInfos.kanji }}</span>
            </CardWrapper>
            
            <span class="kanji-item__name">{{ kanjiInfos.translation }}</span>
          </h1>
        </header>
      
        <section class="wrapper kanji-item__infos">
          <h2 class="kanji-item__infos__title">Prononciations</h2>
        
          <ul class="kanji-item__infos__list">
            <li v-for="(onyomi, index) in kanjiInfos.onyomi"
              :key="index"
              class="kanji-item__infos__list__item"
              lang="jp">
              <div>
                <span class="kanji-item__infos__list__item__kana text-jp">{{ onyomi.kana }}</span>
                <span>({{ onyomi.romaji }})</span>
              </div>
            </li>
        
            <li v-for="(kunyomi, index) in kanjiInfos.kunyomi"
              :key="index"
              class="kanji-item__infos__list__item"
              lang="jp">
              <div>
                <span class="kanji-item__infos__list__item__kana text-jp">{{ kunyomi.kana }}</span>
                <span>({{ kunyomi.romaji }})</span>
              </div>
            </li>
          </ul>
        
          <template v-if="kanjiInfos.examples.length">
            <h2 class="kanji-item__infos__title">Exemples</h2>
        
            <dl class="kanji-item__infos__list">
              <template v-for="(example, index) in kanjiInfos.examples"
                :key="index">
                <div class="kanji-item__infos__list__item">
                  <dt lang="jp">
                    <div class="text-jp">{{ example.kanji }}</div>
                    <div>({{ example.romaji }})</div>
                  </dt>
                  <dd>
                    {{ example.translation }}
                  </dd>
                </div>
              </template>
            </dl>
          </template>
        </section>
      </div>
    </div>
  
    <template v-if="nextKanjiId">
      <NextKanjiLink :kanjiId="nextKanjiId"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
.kanji-item {
  margin-top: 1rem;

  &__kanji {
    font-size: 60%;
  }

  &__name {
    margin-top: 1rem;
    font-size: 2.5rem;
  }

  &__infos {
    &__title {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    &__list {
      margin-bottom: 3rem;

      &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 0;
        border-bottom: 1px solid $default-dark;

        &__kana {
          margin-right: .5rem;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
