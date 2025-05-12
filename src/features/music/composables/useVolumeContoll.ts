import { ref, watch, type Ref } from 'vue'

export const useVolumeControl = (audio: Ref<HTMLAudioElement | null>) => {
  const volume = ref<number>(1)

  const changeVolume = (newVolumeLevel: number) => {
    if (audio.value) {
      audio.value.volume = newVolumeLevel
      volume.value = newVolumeLevel
    }
  }

  const handleVolumeChange = () => {
    if (audio.value?.duration) volume.value = audio.value.volume
  }

  watch(audio, (newAudio, oldAudio) => {
    if (oldAudio) {
      oldAudio.removeEventListener('volumechange', handleVolumeChange)
    }
    if (newAudio) {
      newAudio.addEventListener('volumechange', handleVolumeChange)
    }
  })

  return {
    changeVolume,
    volume,
  }
}
