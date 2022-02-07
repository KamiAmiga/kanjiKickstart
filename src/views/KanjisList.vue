<script setup lang="ts">
import { kanjiList } from '../store/kanji'

import BackLink from '../components/BackLink.vue'
import CardWrapper from '../components/CardWrapper.vue'
</script>

<template>
  <div>
    <BackLink />
  
    <div class="container">
      <header class="top-page-title wrapper wrapper--content-center">
        <h1 class="top-page-title">Kanjis</h1>
      </header>
  
      <section class="wrapper wrapper--last">
        <ul class="kanjis-list">
          <CardWrapper v-for="kanjiItem in kanjiList" :key="kanjiItem.id"
            tag="li"
            interactive>
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
  </div>
</template>

<style scoped lang="scss">
@use '../scss/abstracts' as *;
.kanjis-list {
  $self: &;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 1rem;

  &__item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    color: $default-darkest;

    &__kanji {
      padding: .5rem;
      font-size: $font-size-title;
      transform: scale(1);
      transition: transform $transition-duration-base $transition-timing-function-bounce;

      #{$self}__item:hover &,
      #{$self}__item:focus &,
      #{$self}__item:active & {
        transform: scale(.9);
      }
    }

    &__translation {
      padding: .25rem .5rem .5rem .5rem;
    }
  }
}
</style>
