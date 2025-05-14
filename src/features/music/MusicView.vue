<script setup lang="ts">
import { useAudioPlayer } from './composables/useAudioPlayer'
import { formatTime } from './utils/formatTime'
import VolumeContainer from './components/VolumeContainer.vue'
import MusicButtons from './components/MusicButtons.vue'

const {
  isPlaying,
  pause,
  play,
  nextTrack,
  prevTrack,
  duration,
  currentTime,
  setCurrentTime,
  volume,
  changeVolume,
  audioData,
} = useAudioPlayer()
</script>
<template>
  <main class="page">
    <div class="music-container">
      <div class="album-image-container">
        <img :src="audioData.imgSrc" alt="album img" class="album-img" />
      </div>
      <div class="name-container">
        {{ `${audioData.artist} - ${audioData.name}` }}
      </div>
      <div class="music-info">
        <span>{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          min="0"
          :max="duration"
          :value="currentTime"
          step="0.01"
          class="input-range"
          @input="
            (event) => setCurrentTime(Number((event.currentTarget as HTMLInputElement).value))
          "
        />
        <span>{{ formatTime(duration) }}</span>
      </div>
      <MusicButtons
        :next-track="nextTrack"
        :prev-track="prevTrack"
        :is-playing="isPlaying"
        :play="play"
        :pause="pause"
      />
      <VolumeContainer :volume="volume" :change-volume="changeVolume" />
    </div>
  </main>
</template>

<style>
.music-container {
  background-color: rgba(255, 255, 255, 0.189);
  box-shadow: 0 0 10px rgb(113, 113, 113);
  z-index: 1;
  width: 100%;
  max-width: 368px;
  min-height: 500px;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.album-image-container {
  width: 100%;
  background-color: rgba(156, 158, 185, 0.201);
  border-radius: 7px;
  object-fit: cover;
}
.album-img {
  width: 100%;
  border-radius: 7px;
}
.name-container {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
.music-info {
  display: flex;
  gap: 10px;
  width: 100%;
}
.music-container input {
  width: 100%;
}

input[type='range'] {
  accent-color: rgb(59, 59, 59);
}
</style>
