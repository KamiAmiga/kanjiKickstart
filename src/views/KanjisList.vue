<script setup lang="ts">
import { kanjiList } from '../store/kanji'

import BackLink from '../components/BackLink.vue'
import CardWrapper from '../components/CardWrapper.vue'
</script>

<template>
  <BackLink />

  <div class="container">
    <header class="kanjis-list-title wrapper wrapper--content-center">
      <h1>Kanjis</h1>
    </header>

    <section class="wrapper">
      <ul class="kanjis-list">
        <CardWrapper v-for="kanjiItem in kanjiList" :key="kanjiItem.id"
          tag="li">
          <router-link :to="{ name: 'Kanji', params: { id: kanjiItem.id }}"
            class="kanjis-list__item">
            <span class="kanjis-list__item__kanji text-jp" 
              lang="jp">
              {{ kanjiItem.kanji }}
            </span>
            <span class="kanjis-list__item__translation">
              {{ kanjiItem.translation }}
            </span>
          </router-link>
        </CardWrapper>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.kanjis-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 1rem;

  &-title {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    color: $default-darkest;

    &__kanji {
      padding: .5rem;
      font-size: $font-size-title;
    }

    &__translation {
      padding: .25rem .5rem .5rem .5rem;
    }
  }
}
</style>
