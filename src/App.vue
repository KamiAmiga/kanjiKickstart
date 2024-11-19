<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
@use './scss/abstracts' as *;

// Base
:root {
  --color-primary-base: $primary-base;
  --color-primary-light: $primary-light;
  --color-secondary-base: $secondary-base;
  --color-secondary-light: $secondary-light;
  --color-secondary-lightest: $secondary-lightest;
  --color-default-base: $default-base;
  --color-default-dark: $default-dark;
  --color-default-darker: $default-darker;
  --color-default-lightest: $default-lightest;
  --color-default-darkest: $default-darkest;
}

* {
  padding: 0;
  margin: 0;
  font-weight: $font-weight-base;
}

html {
  font-size: clamp(16px, 4vw, 24px);
}

body {
  @include gradient($position: 10% 20%, $end-color-position: 80%);
  min-height: 100vh;
  font-family: $font-family-base;
  font-size: $font-size-base;
  color: $default-darkest;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}

// Grid
.container {
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 2rem;

  &--content-center {
    align-items: center;
    text-align: center;
  }

  &--2-cols {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }

  &--last {
    margin-bottom: 3rem;
  }
}

// Typography
.title-main {
  font-size: $font-size-title;
  font-weight: $font-weight-base;
}

.text-interactive {
  font-weight: $font-weight-interactive;
}

.text-jp {
  font-family: $font-family-jp;
  font-size: $font-size-jp-base;
  line-height: $line-height-jp;
}

.top-page-title {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

// Page transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-properties-base;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
