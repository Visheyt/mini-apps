<script setup lang="ts">
import NextIcon from '@/shared/icons/NextIcon.vue'
import PauseIcon from '@/shared/icons/PauseIcon.vue'
import PlayIcon from '@/shared/icons/PlayIcon.vue'
import PrevIcon from '@/shared/icons/PrevIcon.vue'
import { useAudioPlayer } from './composables/useAudioPlayer'
import { formatTime } from './utils/formatTime'

const { isPlaying, pause, play, nextTrack, prevTrack, duration, currentTime } = useAudioPlayer()
</script>
<template>
  <main class="page">
    <div class="music-container">
      <div class="album-image"></div>
      <div class="music-info">
        <span>{{ formatTime(currentTime) }}</span>
        <input type="range" min="0" :max="duration" step="0.01" />
        <span>{{ formatTime(duration) }}</span>
      </div>
      <div class="music-buttons">
        <button @click="prevTrack"><PrevIcon /></button>
        <button v-if="!isPlaying" @click="play"><PlayIcon /></button>
        <button v-else @click="pause"><PauseIcon /></button>
        <button @click="nextTrack"><NextIcon /></button>
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.album-image {
  width: 100%;
  background-color: aqua;
  border-radius: 7px;
  height: 350px;
}
.music-info {
  display: flex;
  gap: 10px;
  width: 100%;
}
.music-info input {
  width: 100%;
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
