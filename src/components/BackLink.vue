<script setup lang="ts">
interface Props {
  destination?: string
}

defineProps<Props>()
</script>

<template>
  <router-link v-if="destination === 'Kanjis'"
    :to="{ name: destination }">
    Retour à la liste des kanjis
  </router-link>
  <router-link v-else
    :to="{ name: 'Home' }">
    Retour à l'accueil
  </router-link>
</template>

<style scoped>
</style>
