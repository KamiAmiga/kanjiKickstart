<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
// Base
* {
  padding: 0;
  margin: 0;
  font-weight: $font-weight-base;
}

html {
  font-size: clamp(16px, 4vw, 24px);
}

body {
  min-height: 100vh;
  background: $secondary-lightest;
  background: radial-gradient(
    circle farthest-side at 10% 20%,
    $secondary-lightest 0%,
    $default-base 80%);
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

  &--content-center {
    align-items: center;
    text-align: center;
  }

  &--2-cols {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
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
  transition: opacity .32s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
