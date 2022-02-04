<script setup lang="ts">
// tocheck : https://www.bacancytechnology.com/blog/vue3-typescript#4
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

html {
  font-size: clamp(16px, 4vw, 24px);
}

body {
  min-height: 100vh;
  background-color: $default-base;
  font-family: 'Assistant', sans-serif;

  &::after {
    content: '';
    width: 120vw;
    height: 120vw;
    position: absolute;
    top: -50vw;
    left: -50vw;
    background: radial-gradient(circle closest-side, $default-light 0, transparent 100%);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
}

ul {
  list-style: none;
}

.container {
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  &--content-center {
    align-items: center;
    text-align: center;
  }

  &--col-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
  }
}

[lang="jp"] {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.25rem;
  line-height: 1;
}
</style>
