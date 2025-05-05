import { ref, onMounted } from 'vue'
import { musicMockData } from '../data/music-data'

export const useAudioPlayer = () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref<boolean>(false)
  const trackIndex = ref<number>(0)

  onMounted(() => {
    audioRef.value = new Audio(musicMockData[trackIndex.value].src)
  })
  const play = () => {
    audioRef.value?.play()
    isPlaying.value = true
  }

  const pause = () => {
    audioRef.value?.pause()
    isPlaying.value = false
  }

  const nextTrack = () => {
    trackIndex.value += 1
    audioRef.value?.src = musicMockData[trackIndex.value].src
  }

  return {
    pause,
    play,
    isPlaying,
  }
}
