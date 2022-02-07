<script setup lang="ts">
import Arrow from '../assets/arrow.svg?component'

interface Props {
  destination?: string;
}

defineProps<Props>()
</script>

<template>
  <template v-if="destination === 'Kanjis'">
    <router-link :to="{ name: 'Kanjis' }"
      class="back-link back-link--kanji">
      <div class="back-link__container container">
        <span class="back-link__icon">
          <Arrow />
        </span>
        <span class="back-link__text text-interactive">
          Retour à la liste des kanjis
        </span>
      </div>
    </router-link>
  </template>

  <template v-else>
    <router-link :to="{ name: 'Home' }"
      class="back-link">
      <div class="back-link__container container">
        <span class="back-link__icon">
          <Arrow />
        </span>
        <span class="back-link__text text-interactive">
          Retour à l'accueil
        </span>
      </div>
    </router-link>
  </template>
</template>

<style scoped lang="scss">
@use '../scss/abstracts' as *;

.back-link {
  display: block;
  width: 100%;
  padding: .5rem 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  color: $secondary-base;
  text-decoration: none;

  &__container {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: .125rem solid $secondary-light;
    margin-right: 1rem;
    border-radius: 50%;
    box-shadow: 0 0 .5rem fade-out($secondary-light, .36);

    svg {
      width: 1.25rem;
      stroke: $secondary-base;
    }
  }
}
</style>
