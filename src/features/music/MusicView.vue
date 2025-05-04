<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audioRef = ref<HTMLAudioElement | null>(null)

onMounted(() => {
  audioRef.value = new Audio('/virgin.mp3')
})
</script>
<template>
  <main class="page">
    <h1>This is music page</h1>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
