<script setup lang="ts">
import NextIcon from '@/shared/icons/NextIcon.vue'
import PauseIcon from '@/shared/icons/PauseIcon.vue'
import PlayIcon from '@/shared/icons/PlayIcon.vue'
import PrevIcon from '@/shared/icons/PrevIcon.vue'

const { prevTrack, nextTrack, pause, play, isPlaying } = defineProps<{
  prevTrack: () => void
  nextTrack: () => void
  play: () => void
  pause: () => void
  isPlaying: boolean
}>()
</script>

<template>
  <div class="music-buttons">
    <button @click="prevTrack"><PrevIcon /></button>
    <button v-if="!isPlaying" @click="play"><PlayIcon /></button>
    <button v-else @click="pause"><PauseIcon /></button>
    <button @click="nextTrack"><NextIcon /></button>
  </div>
</template>

<style>
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
