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
@use '../scss/abstracts' as *;

.next-kanji-link {
  $self: &;

  @include shadow($levels: 6, $color: $primary-base);
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
  border-radius: 2rem;
  transition: box-shadow $transition-properties-base;

  &__icon {
    width: 1rem;
    margin-left: 1.25rem;
    stroke: $font-color-reverse;
    transform: rotate(180deg);
    transition: transform $transition-duration-base $transition-timing-function-bounce;

    #{$self}:hover &,
    #{$self}:focus &,
    #{$self}:active & {
      transform: rotate(180deg) translateX(.25rem);
    }
  }

  &:hover,
  &:focus,
  &:active {
    @include shadow($levels: 4, $color: $primary-base);
  }
}
</style>
