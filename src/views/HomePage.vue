<script setup lang="ts">
import Arrow from '../assets/arrow.svg?component'
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
          <router-link :to="{ name: 'Kanjis' }"
            class="home-page__nav__list__link">
            <span class="home-page__nav__list__link__text text-interactive">
              Liste des kanjis
            </span>
            <Arrow class="home-page__nav__list__link__icon" />
          </router-link>
        </CardWrapper>
        <CardWrapper tag="li" interactive>
          <router-link :to="{ name: 'HiraganasTable' }"
            class="home-page__nav__list__link">
            <span class="home-page__nav__list__link__text text-interactive">
              Tableau des hiraganas
            </span>
            <Arrow class="home-page__nav__list__link__icon" />
          </router-link>
        </CardWrapper>
        <CardWrapper tag="li" interactive>
          <router-link :to="{ name: 'KatakanasTable' }"
            class="home-page__nav__list__link">
            <span class="home-page__nav__list__link__text text-interactive">
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
      $start-color: white,
      $end-color: transparent,
    );
    min-height: 50vh;
    justify-content: center;
    position: relative;
    z-index: 0;
    font-size: clamp($font-size-title, 6vw, 4rem);
    color: $default-darker;

    &::before {
      content: "漢字";
      font-family: $font-family-jp;
      color: scale-color($secondary-base, $lightness: 85%);
      font-size: 8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      text-shadow: 0 0 .05em fade-out($default-lightest, .5),
        0 0 1em $default-lightest;
    }

    &__title {
      font-size: 1em;
      margin-bottom: .5em;
      letter-spacing: .025em;
    }

    &__intro {
      font-size: clamp($font-size-title / 2, .375em, $font-size-title);
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
        padding: .75rem 1rem;

        &__icon {
          width: 1rem;
          stroke: $secondary-base;
          transform: rotate(180deg);
          transition: transform $transition-duration-base $transition-timing-function-bounce;

          #{$self}__nav__list__link:hover &,
          #{$self}__nav__list__link:focus &,
          #{$self}__nav__list__link:active & {
            transform: rotate(180deg) translateX(.25rem);
          }
        }

        &__text {
          color: $font-color-accented;
        }
      }
    }
  }
}
</style>
