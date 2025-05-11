import { onUnmounted, ref } from 'vue'

export const useAudioDuration = (audio: HTMLAudioElement | null) => {
  const duration = ref<number>(0)
  const currentTime = ref<number>(0)

  const setCurrentTime = (newCurrentTime: number) => {
    if (audio) {
      currentTime.value = newCurrentTime
      audio.currentTime = newCurrentTime
    }
  }
  const handleLoadedMetaData = () => {
    if (audio?.duration) duration.value = audio.duration
  }

  const handleTimeUpdate = () => {
    if (audio?.currentTime) currentTime.value = audio.currentTime
  }

  audio?.addEventListener('loadedmetadata', handleLoadedMetaData)
  audio?.addEventListener('timeupdate', handleTimeUpdate)

  onUnmounted(() => {
    if (!audio) return
    audio.removeEventListener('timeupdate', handleTimeUpdate)
    audio.removeEventListener('loadedmetadata', handleLoadedMetaData)
  })

  return {
    duration,
    currentTime,
    setCurrentTime,
  }
}
