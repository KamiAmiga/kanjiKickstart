<script setup lang="ts">
interface Props {
  kanjiId: number;
}

defineProps<Props>()
</script>

<template>
  <router-link :to="{ name: 'Kanji', params: { id: kanjiId }}">
    Kanji suivant
  </router-link>
</template>

<style scoped>
</style>
