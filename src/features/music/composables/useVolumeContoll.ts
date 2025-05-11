import { onUnmounted, ref } from 'vue'

export const useVolumeControl = (audio: HTMLAudioElement | null) => {
  const volume = ref<number>(1)

  const changeVolume = (newVolumeLevel: number) => {
    if (audio) {
      audio.volume = newVolumeLevel
      volume.value = newVolumeLevel
    }
  }

  const handleLoadedMetaData = () => {
    if (audio?.duration) volume.value = audio.volume
  }
  audio?.addEventListener('loadedmetadata', handleLoadedMetaData)

  onUnmounted(() => {
    if (!audio) return
    audio?.removeEventListener('loadedmetadata', handleLoadedMetaData)
  })

  return {
    changeVolume,
    volume,
  }
}
