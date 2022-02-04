<script setup lang="ts">
import Arrow from '../assets/arrow.svg?component'

interface Props {
  kanjiId: number;
}

defineProps<Props>()
</script>

<template>
  <router-link :to="{ name: 'Kanji', params: { id: kanjiId }}"
    class="next-kanji-link">
    <span class="next-kanji-link__text text-interactive">
      Kanji suivant
    </span>
    <Arrow class="next-kanji-link__icon" />
  </router-link>
</template>

<style scoped lang="scss">
.next-kanji-link {
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  background: radial-gradient(
    ellipse at top left,
    $primary-light 0,
    $primary-base 100%);
  color: $font-color-reverse;
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: .25rem .25rem .5rem fade-out($primary-light, .32);

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }

  &__icon {
    width: 1rem;
    margin-left: 1.25rem;
    stroke: $font-color-reverse;
    transform: rotate(180deg);
  }
}
</style>
