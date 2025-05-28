<script setup lang="ts">
import { useAudio } from './composables/useAudio'
import VolumeContainer from './components/VolumeContainer.vue'
import MusicButtons from './components/MusicButtons.vue'
import TimesContainer from './components/TimesContainer.vue'
import RepeatIcon from '@/shared/icons/RepeatIcon.vue'
import MuteIcon from '@/shared/icons/MuteIcon.vue'
import ShuffleIcon from '@/shared/icons/ShuffleIcon.vue'
import RepeatOneIcon from '@/shared/icons/RepeatOneIcon.vue'

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
  toggleMute,
  repeatMode,
  toggleRepeatMode,
} = useAudio()
</script>
<template>
  <main class="page music-page">
    <div class="music-container">
      <div class="album-image-container">
        <img :src="audioData.imgSrc" alt="album img" class="album-img" />
      </div>
      <div class="name-container">
        {{ `${audioData.artist} - ${audioData.name}` }}
      </div>
      <TimesContainer :currentTime :setCurrentTime :duration />
      <MusicButtons :prev-track :next-track :isPlaying :pause :play />
      <VolumeContainer :volume="volume" :change-volume />
      <div class="additional-buttons">
        <button><ShuffleIcon /></button>
        <button @click="toggleRepeatMode" :class="repeatMode === 'no' ? '' : 'active'">
          <RepeatIcon v-if="repeatMode === 'all' || repeatMode === 'no'" />
          <RepeatOneIcon v-else />
        </button>
        <button @click="toggleMute" :class="volume === 0 ? 'active' : ''"><MuteIcon /></button>
      </div>
    </div>
  </main>
</template>

<style>
.music-page {
  justify-content: center;
  align-items: center;
  background: #360033;
  background: -webkit-linear-gradient(to right, #0b8793, #360033);
  background: linear-gradient(to right, #0b8793, #360033);
  padding: 10px;
}

.music-container {
  box-shadow: 0 0 2px #360033;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  border-radius: 7px;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.897);
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
  height: 50px;
}

.music-container input {
  width: 100%;
}

input[type='range'] {
  accent-color: rgb(59, 59, 59);
}

.additional-buttons {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
}
.additional-buttons button {
  transition: color 0.3s ease;
  color: rgb(132, 132, 132);
}
.additional-buttons button:hover {
  color: rgb(40, 40, 40);
}
.additional-buttons button.active {
  color: black;
}
</style>
