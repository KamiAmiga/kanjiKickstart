<script setup lang="ts">
</script>

<template>
  <h1>Kanji Kickstart</h1>
  <p>A short introduction to japanese kanjis</p>

  <nav>
    <ul>
      <li><router-link :to="{ name: 'kanjis' }">Kanjis list</router-link></li>
      <li><router-link :to="{ name: 'hiraganas' }">Hiraganas table</router-link></li>
      <li><router-link :to="{ name: 'katakanas' }">Katakanas table</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
</style>
