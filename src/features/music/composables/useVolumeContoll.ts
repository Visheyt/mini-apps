import { ref, watch, type Ref } from 'vue'

export const useVolumeControl = (audio: Ref<HTMLAudioElement | null>) => {
  const volume = ref<number>(1)

  const changeVolume = (newVolumeLevel: number) => {
    if (audio.value) {
      audio.value.volume = newVolumeLevel
      volume.value = newVolumeLevel
    }
  }

  const handleLoadedMetaData = () => {
    if (audio.value?.duration) volume.value = audio.value.volume
  }

  watch(audio, (newAudio, oldAudio) => {
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
