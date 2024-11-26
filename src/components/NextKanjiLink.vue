<script setup lang="ts">
import Arrow from '../assets/arrow.svg'

interface Props {
  kanjiId: number
}

defineProps<Props>()
</script>

<template>
  <router-link :to="{ name: 'Kanji', params: { id: kanjiId } }" class="next-kanji-link">
    <span class="next-kanji-link__text text-interactive"> Kanji suivant </span>
    <Arrow class="next-kanji-link__icon" />
  </router-link>
</template>

<style scoped lang="scss">
@use '../scss/abstracts/mixins' as *;

.next-kanji-link {
  $self: &;

  @include shadow($levels: 6, $color: var(--color-primary-base));
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 1rem;
  right: 50%;
  z-index: 2;
  background: radial-gradient(ellipse at top left, var(--color-primary-light) 0, var(--color-primary-base) 100%);
  color: var(--font-color-reverse);
  border-radius: 2rem;
  transition: box-shadow var(--transition-properties-base);
  transform: translateX(min(50vw - 1rem, 30rem));

  &__icon {
    width: 1rem;
    margin-left: 1.25rem;
    stroke: var(--font-color-reverse);
    transform: rotate(180deg);
    transition: transform var(--transition-duration-base) var(--transition-timing-function-bounce);

    #{$self}:hover &,
    #{$self}:focus &,
    #{$self}:active & {
      transform: rotate(180deg) translateX(0.25rem);
    }
  }

  &:hover,
  &:focus,
  &:active {
    @include shadow($levels: 4, $color: var(--color-primary-base));
  }
}
</style>
