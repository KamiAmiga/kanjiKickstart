<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { kanjiList } from '../store/kanji'

import BackLink from '../components/BackLink.vue'
import CardWrapper from '../components/CardWrapper.vue'

const itemRefs = ref([])

onMounted(() => {
  const kanjiCards = itemRefs.value
  const options = {
    threshold: 1
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement

        target.style.setProperty("--delay", `${(index / (10 + index * .5) + .2).toFixed(3)}s`);
        target.classList.add('intersected')
        observer.unobserve(target)
      }
    })
  }, options)
  kanjiCards.forEach(card => {
    observer.observe(card)
  })
})
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
          <li v-for="(kanjiItem) in kanjiList" :key="kanjiItem.id" ref="itemRefs" class="kanjis-list__test">
            <CardWrapper interactive>
              <router-link :to="{ name: 'Kanji', params: { id: kanjiItem.id } }" class="kanjis-list__item">
                <span class="kanjis-list__item__kanji text-jp" lang="jp">
                  {{ kanjiItem.kanji }}
                </span>
                <span class="kanjis-list__item__translation">
                  {{ kanjiItem.translation }}
                </span>
              </router-link>
            </CardWrapper>
          </li>
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
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: 1rem;

  @keyframes cards_appearence {}

  &__test {
    --delay: 0s;

    display: flex;
    align-items: stretch;
    justify-content: stretch;
    opacity: 0;
    transform: scale(0.25);
    transform-origin: top left;
    transition: opacity .3s var(--delay) ease-in-out, transform .5s var(--delay) cubic-bezier(.5, .75, .75, 1.25);

    &.intersected {
      opacity: 1;
      transform-origin: center;
      transform: scale(1);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    color: $default-darkest;

    &__kanji {
      padding: 0.5rem;
      font-size: $font-size-title;
      transform: scale(1);
      transition: transform $transition-duration-base $transition-timing-function-bounce;

      #{$self}__item:hover &,
      #{$self}__item:focus &,
      #{$self}__item:active & {
        transform: scale(0.9);
      }
    }

    &__translation {
      padding: 0.25rem 0.5rem 0.5rem 0.5rem;
      font-size: $font-size-base * .875;
    }
  }
}
</style>
