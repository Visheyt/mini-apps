<script setup lang="ts">
import NextIcon from '@/shared/icons/NextIcon.vue'
import PauseIcon from '@/shared/icons/PauseIcon.vue'
import PlayIcon from '@/shared/icons/PlayIcon.vue'
import PrevIcon from '@/shared/icons/PrevIcon.vue'
import { useAudioPlayer } from './composables/useAudioPlayer'

const { isPlaying, pause, play } = useAudioPlayer()
</script>
<template>
  <main class="page">
    <div class="music-container">
      <div class="music-buttons">
        <button><PrevIcon /></button>
        <button v-if="!isPlaying" @click="play"><PlayIcon /></button>
        <button v-else @click="pause"><PauseIcon /></button>
        <button><NextIcon /></button>
      </div>
    </div>
  </main>
</template>

<style>
.music-container {
  width: 100%;
  max-width: 368px;
  min-height: 500px;
  border: 1px solid black;
  border-radius: 5px;
}
.music-buttons {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5px;
}

.music-buttons svg {
  width: 40px;
}
</style>
