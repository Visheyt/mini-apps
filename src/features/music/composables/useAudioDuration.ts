import { onUnmounted, ref, watch, type Ref } from 'vue'
import { formatTime } from '../utils/formatTime'

export const useAudioDuration = (audioRef: Ref<HTMLAudioElement | null>) => {
  const duration = ref<string>('0:00')
  const currentTime = ref<string>('0:00')
  const time = ref<number>(0)

  const handleLoadedMetaData = () => {
    if (audioRef.value?.duration) duration.value = formatTime(audioRef.value.duration)
  }

  const handleTimeUpdate = () => {
    if (audioRef.value?.currentTime) {
      currentTime.value = formatTime(audioRef.value.currentTime)
      time.value = audioRef.value.currentTime
    }
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
    time,
  }
}
