<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ComputedRef } from 'vue'
import { kanjiList } from '../store/kanji'
import { KanjiItem } from '../types/kanji'

import Backlink from '../components/Backlink.vue'
import NextKanjiLink from '../components/NextKanjiLink.vue'

const route = useRoute();
const kanjiId = computed(() => route.params.id) as ComputedRef<string>
const kanjiInfos = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value))) as ComputedRef<KanjiItem>
const nextKanjiId = computed(() => kanjiList.find(kanji => kanji.id === parseInt(kanjiId.value) + 1)?.id) as ComputedRef<number | undefined>
</script>

<template>
  <Backlink destination="Kanjis"/>
  
  <div class="wrapper wrapper--col-wrap kanji-item">
    <header>    
      <h1 class="wrapper wrapper--content-center">
        <div class="card card--outer">
          <span lang="jp">{{ kanjiInfos.kanji }}</span>
        </div>
        <span class="kanji-item__name">{{ kanjiInfos.translation }}</span>
      </h1>
    </header>
  
    <section class="wrapper kanji-item__infos">
      <h2 class="kanji-item__infos__title">Prononciations</h2>
    
      <ul class="kanji-item__infos__list">
        <li v-for="(onyomi, index) in kanjiInfos.onyomi"
          :key="index"
          class="kanji-item__infos__list__item">
          <div>
            <span lang="jp">{{ onyomi.kana }}</span>
            <span>({{ onyomi.romaji }})</span>
          </div>
        </li>
    
        <li v-for="(kunyomi, index) in kanjiInfos.kunyomi"
          :key="index"
          class="kanji-item__infos__list__item">
          <div>
            <span lang="jp">{{ kunyomi.kana }}</span>
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
              <dt>
                <div lang="jp">{{ example.kanji }}</div>
                <div>({{ example.romaji }})</div>
              </dt>
              <dd>
                {{ example.translation }}
              </dd>
            </div>
          </template>
        </dl>
      </template>
    
      <template v-if="nextKanjiId">
        <NextKanjiLink :kanjiId="nextKanjiId"/>
      </template>
    </section>
  </div>
</template>

<style scoped lang="scss">
.kanji-item {
  padding-top: clamp(.25rem, 1vh, 1rem);

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

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 14rem;
  height: 14rem;
  background-color: white;

  &--outer {
    border: .5rem solid $default-light;
    position: relative;
    z-index: 0;
    border-radius: 1.25rem;
    box-shadow: .5rem .5rem 1.5rem fade-out($default-darker, 0.8),
      inset .1rem .1rem .4rem fade-out($default-darker, 0.76);

      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        opacity: .6;
        background: repeating-linear-gradient(to right, $default-dark, $default-dark .4rem, transparent .4rem, transparent 1rem);
        transform: translate(-50%, -50%);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
  }

  [lang="jp"] {
    font-size: 6rem;
  }
}
</style>
