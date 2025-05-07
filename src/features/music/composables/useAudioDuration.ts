import { onUnmounted, ref, watch, type Ref } from 'vue'

export const useAudioDuration = (audioRef: Ref<HTMLAudioElement | null>) => {
  const duration = ref<number>(0)
  const currentTime = ref<number>(0)

  const handleLoadedMetaData = () => {
    if (audioRef.value?.duration) duration.value = audioRef.value.duration
  }

  const handleTimeUpdate = () => {
    if (audioRef.value?.currentTime) currentTime.value = audioRef.value.currentTime
  }

  watch(audioRef, (newAudio, oldAudio) => {
    if (oldAudio) {
      oldAudio.removeEventListener('timeupdate', handleTimeUpdate)
      oldAudio.removeEventListener('loadedmetadata', handleLoadedMetaData)
    }
    if (newAudio) {
      newAudio.addEventListener('timeupdate', handleTimeUpdate)
      newAudio.addEventListener('loadedmetadata', handleLoadedMetaData)
    }
  })

  onUnmounted(() => {
    if (!audioRef.value) return
    audioRef.value?.removeEventListener('timeupdate', handleTimeUpdate)
    audioRef.value?.removeEventListener('loadedmetadata', handleLoadedMetaData)
  })

  return {
    duration,
    currentTime,
  }
}
