<script setup lang="ts">
import Arrow from '../assets/arrow.svg'
import CardWrapper from '../components/CardWrapper.vue'
</script>

<template>
  <div class="container home-page">
    <header class="home-page__header wrapper wrapper--content-center">
      <h1 class="home-page__header__title">Kanji Kickstart</h1>
      <p class="home-page__header__intro">Introduction à l'apprentissage des kanjis japonais.</p>
    </header>

    <nav class="home-page__nav">
      <ul class="home-page__nav__list">
        <CardWrapper tag="li" interactive>
          <router-link :to="{ name: 'Kanjis' }" class="home-page__nav__list__link">
            <span class="text-interactive">
              Liste des kanjis
            </span>
            <Arrow class="home-page__nav__list__link__icon" />
          </router-link>
        </CardWrapper>
        <CardWrapper tag="li" interactive>
          <router-link :to="{ name: 'HiraganasTable' }" class="home-page__nav__list__link">
            <span class="text-interactive">
              Tableau des hiraganas
            </span>
            <Arrow class="home-page__nav__list__link__icon" />
          </router-link>
        </CardWrapper>
        <CardWrapper tag="li" interactive>
          <router-link :to="{ name: 'KatakanasTable' }" class="home-page__nav__list__link">
            <span class="text-interactive">
              Tableau des katakanas
            </span>
            <Arrow class="home-page__nav__list__link__icon" />
          </router-link>
        </CardWrapper>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/abstracts' as *;

.home-page {
  $self: &;

  &__header {
    @include gradient(
      $shape: ellipse,
      $direction: farthest-side,
      $position: top center,
      $start-color: var(--color-default-lightest),
      $end-color: transparent
    );
    min-height: 50vh;
    justify-content: center;
    position: relative;
    z-index: 0;
    font-size: clamp(var(--font-size-title), 6vw, 4rem);
    color: var(--color-default-darker);

    &::before {
      content: '漢字';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      opacity: 0.1;
      font-family: var(--font-family-jp);
      color: var(--color-secondary-base);
      font-size: 8rem;
      transform: translate(-50%, -50%);
    }

    &__title {
      font-size: 1em;
      margin-bottom: 0.5em;
      letter-spacing: 0.025em;
    }

    &__intro {
      font-size: clamp(var(--font-size-title) / 2, 0.375em, var(--font-size-title));
    }
  }

  &__nav {
    max-width: 20rem;
    margin: 0 auto;

    &__list {
      display: grid;
      row-gap: 1rem;

      &__link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        padding: 0.75rem 1rem;
        color: var(--font-color-accented);

        &__icon {
          width: 1rem;
          stroke: currentColor;
          transform: rotate(180deg);
          transition: transform var(--transition-duration-base) var(--transition-timing-function-bounce);

          #{$self}__nav__list__link:hover &,
          #{$self}__nav__list__link:focus &,
          #{$self}__nav__list__link:active & {
            transform: rotate(180deg) translateX(0.25rem);
          }
        }
      }
    }
  }
}
</style>
