import { type Ref } from 'vue'

export const useVolumeControl = (audioRef: Ref<HTMLAudioElement | null>) => {
  const changeVolume = (newVolumeLevel: number) => {
    if (audioRef.value) audioRef.value.volume = newVolumeLevel
  }

  return {
    changeVolume,
  }
}
