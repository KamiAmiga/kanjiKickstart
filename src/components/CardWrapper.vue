<script setup lang="ts">import { reactive } from 'vue';

interface Props {
  type?: string;
  tag?: string;
}

defineProps<Props>()
</script>

<template>
  <component :is="tag ? tag : 'div'"
    :class="[ type ? `card--${type}` : '']"
    class="card">
    <div class="card__content">
      <slot></slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
.card {
  $self: &;

  display: flex;
  justify-content: stretch;
  align-items: stretch;

  &--inner {
    box-shadow: none;
  }

  &--outer {
    justify-content: center;
    align-items: center;
    width: 14rem;
    height: 14rem;
    border-radius: 1rem;
    box-shadow: .5rem .5rem 1.5rem fade-out($default-darker, 0.8);
    background: radial-gradient(
      circle farthest-side at -10% -10%,
      $default-light 0%,
      $default-base 200%);
  }
  
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    z-index: 0;
    background-color: $default-lightest;
    border-radius: .5rem;
    box-shadow: .125rem .125rem .25rem fade-out($default-darker, 0.8);

    #{$self}--outer &,
    #{$self}--inner & {
      box-shadow: inset .1rem .1rem .4rem fade-out($default-darker, 0.76);
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
    }

    &::after {
      #{$self}--outer & {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
}
</style>