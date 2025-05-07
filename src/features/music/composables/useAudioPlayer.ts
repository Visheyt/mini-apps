import { ref, onMounted } from 'vue'
import { musicMockData } from '../data/music-data'
import { useAudioDuration } from './useAudioDuration'

export const useAudioPlayer = () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref<boolean>(false)
  const trackIndex = ref<number>(0)
  const { duration, currentTime, setCurrentTime } = useAudioDuration(audioRef)

  const setupAudio = (index: number) => {
    if (audioRef.value) {
      audioRef.value.pause()
    }
    audioRef.value = new Audio(musicMockData[index].src)

    audioRef.value.load()

    if (isPlaying.value) {
      audioRef.value.play()
    }
  }
  onMounted(() => {
    setupAudio(trackIndex.value)
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
    if (trackIndex.value < musicMockData.length - 1) {
      trackIndex.value += 1
    } else {
      trackIndex.value = 0
    }
    setupAudio(trackIndex.value)
    if (!isPlaying.value) {
      play()
    }
  }

  const prevTrack = () => {
    if (trackIndex.value > 0) {
      trackIndex.value -= 1
    } else {
      trackIndex.value = musicMockData.length - 1
    }
    setupAudio(trackIndex.value)
    if (!isPlaying.value) {
      play()
    }
  }

  return {
    pause,
    play,
    isPlaying,
    nextTrack,
    prevTrack,
    duration,
    currentTime,
    setCurrentTime,
  }
}
