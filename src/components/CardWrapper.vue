<script setup lang="ts">
interface Props {
  type?: string
  tag?: string
  interactive?: boolean
}

defineProps<Props>()
</script>

<template>
  <component
    :is="tag ? tag : 'div'"
    :class="[type ? `card--${type}` : '', interactive ? 'card--interactive' : '']"
    class="card"
  >
    <div class="card__content">
      <slot></slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
@use '../scss/abstracts' as *;

.card {
  $self: &;

  display: flex;
  justify-content: stretch;
  align-items: stretch;

  &--inner {
    box-shadow: none;
  }

  &--outer {
    @include gradient($position: -50% -50%, $end-color-position: 200%);
    @include shadow();
    justify-content: center;
    align-items: center;
    width: 14rem;
    height: 14rem;
    border-radius: 1rem;
  }

  &__content {
    @include shadow($levels: 4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    z-index: 0;
    background-color: $default-lightest;
    border-radius: 0.5rem;

    #{$self}--interactive & {
      border: 2px solid $default-lightest;
      transition:
        border $transition-properties-base,
        background-color $transition-properties-base,
        box-shadow $transition-properties-base;
    }

    #{$self}--interactive:hover &,
    #{$self}--interactive:focus &,
    #{$self}--interactive:active & {
      @include shadow($levels: 3, $color: $primary-base);
      border: 2px solid $secondary-light;
      background-color: $secondary-lightest;
    }

    #{$self}--outer &,
    #{$self}--inner & {
      @include shadow($inset: true, $color: mix($default-darker, $secondary-base), $levels: 3);
    }

    #{$self}--outer & {
      flex-grow: 0;
      flex-shrink: 0;
      width: 13rem;
      height: 13rem;
      font-size: 13rem;
    }

    &::before,
    &::after {
      #{$self}--outer & {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        opacity: 0.6;
        background: repeating-linear-gradient(
          to right,
          $default-dark,
          $default-dark 0.4rem,
          transparent 0.4rem,
          transparent 1rem
        );
        transform: translate(-50%, -50%);
      }
    }

    &::after {
      #{$self}--outer & {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
}
</style>
