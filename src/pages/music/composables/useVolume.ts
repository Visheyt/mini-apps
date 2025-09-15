import { ref, watch, type Ref } from 'vue'

export const useVolume = (audio: Ref<HTMLAudioElement | null>) => {
  const volume = ref<number>(1)
  const volumeBeforeMute = ref<number>(0.5)

  const changeVolume = (newVolumeLevel: number) => {
    if (audio.value) {
      audio.value.volume = newVolumeLevel
      volume.value = newVolumeLevel
    }
  }

  const handleVolumeChange = () => {
    if (audio.value?.duration) volume.value = audio.value.volume
  }

  const getVolume = () => {
    return volume.value !== 1 ? volume.value : 1
  }

  const toggleMute = () => {
    if (!audio.value) return

    const currentVolume = audio.value.volume

    if (currentVolume > 0) {
      volumeBeforeMute.value = currentVolume
      changeVolume(0)
    } else {
      changeVolume(volumeBeforeMute.value)
    }
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
    getVolume,
    toggleMute,
  }
}
