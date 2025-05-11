import { ref, watch, type Ref } from 'vue'

export const useVolumeControl = (audioRef: Ref<HTMLAudioElement | null>) => {
  const volume = ref<number>(1)

  const changeVolume = (newVolumeLevel: number) => {
    if (audioRef.value) {
      audioRef.value.volume = newVolumeLevel
      volume.value = newVolumeLevel
    }
  }

  const handleLoadedMetaData = () => {
    if (audioRef.value?.duration) volume.value = audioRef.value.volume
  }

  watch(audioRef, (newAudio, oldAudio) => {
    if (oldAudio) {
      oldAudio.removeEventListener('loadedmetadata', handleLoadedMetaData)
    }
    if (newAudio) {
      newAudio.addEventListener('loadedmetadata', handleLoadedMetaData)
    }
  })

  return {
    changeVolume,
    volume,
  }
}
