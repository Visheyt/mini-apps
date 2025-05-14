<script setup lang="ts">
import VolumeMuteIcon from '@/shared/icons/VolumeMuteIcon.vue'
import VolumeUpIcon from '@/shared/icons/VolumeUpIcon.vue'

const { volume, changeVolume } = defineProps<{
  volume: number
  changeVolume: (volumeNumber: number) => void
}>()
</script>

<template>
  <div class="volume-container">
    <button class="volume-btn" @click="changeVolume(0)">
      <VolumeMuteIcon />
    </button>
    <input
      type="range"
      :value="volume * 100"
      max="100"
      class="input-range"
      @input="
        (event) => changeVolume(Number((event.currentTarget as HTMLInputElement).value) / 100)
      "
    />
    <button class="volume-btn" @click="changeVolume(1)">
      <VolumeUpIcon />
    </button>
  </div>
</template>

<style>
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
