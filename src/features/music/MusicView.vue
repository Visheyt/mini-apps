<script setup lang="ts">
import NextIcon from '@/shared/icons/NextIcon.vue'
import PauseIcon from '@/shared/icons/PauseIcon.vue'
import PlayIcon from '@/shared/icons/PlayIcon.vue'
import PrevIcon from '@/shared/icons/PrevIcon.vue'
import { useAudioPlayer } from './composables/useAudioPlayer'
import { formatTime } from './utils/formatTime'
import VolumeMuteIcon from '@/shared/icons/VolumeMuteIcon.vue'
import VolumeUpIcon from '@/shared/icons/VolumeUpIcon.vue'

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
          @input="
            (event) => setCurrentTime(Number((event.currentTarget as HTMLInputElement).value))
          "
        />
        <span>{{ formatTime(duration) }}</span>
      </div>
      <div class="music-buttons">
        <button @click="prevTrack"><PrevIcon /></button>
        <button v-if="!isPlaying" @click="play"><PlayIcon /></button>
        <button v-else @click="pause"><PauseIcon /></button>
        <button @click="nextTrack"><NextIcon /></button>
      </div>
      <div class="volume-container">
        <button class="volume-btn" @click="changeVolume(0)">
          <VolumeMuteIcon />
        </button>
        <input
          type="range"
          :value="volume * 100"
          max="100"
          @input="
            (event) => changeVolume(Number((event.currentTarget as HTMLInputElement).value) / 100)
          "
        />
        <button class="volume-btn" @click="changeVolume(1)">
          <VolumeUpIcon />
        </button>
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
  height: 350px;
}
.album-img {
  width: 100%;
  border-radius: 7px;
}
.name-container {
  width: 100%;
  text-align: center;
  font-size: 18px;
}
.music-info {
  display: flex;
  gap: 10px;
  width: 100%;
}
.music-container input {
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
.volume-container {
  display: flex;
  width: 100%;
  align-items: center;
}
.volume-btn {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
}
</style>
