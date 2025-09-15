<script setup lang="ts">
import { formatTime } from '../utils/formatTime'

defineProps<{
  currentTime: number
  setCurrentTime: (newTime: number) => void
  duration: number
}>()
</script>

<template>
  <div class="times-container">
    <span>{{ formatTime(currentTime) }}</span>
    <input
      type="range"
      min="0"
      :max="duration"
      :value="currentTime"
      step="0.01"
      class="input-range"
      @input="(event) => setCurrentTime(Number((event.currentTarget as HTMLInputElement).value))"
    />
    <span>{{ formatTime(duration) }}</span>
  </div>
</template>

<style>
.times-container {
  display: flex;
  gap: 10px;
  width: 100%;
}
</style>
