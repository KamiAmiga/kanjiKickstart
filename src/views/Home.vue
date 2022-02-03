<script setup lang="ts">
</script>

<template>
  <h1>Kanji Kickstart</h1>
  <p>Introduction à l'apprentissage des kanjis japonais.</p>

  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Kanjis' }">Liste des kanjis</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'HiraganasTable' }">Tableau des hiraganas</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'KatakanasTable' }">Tableau des katakanas</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>
