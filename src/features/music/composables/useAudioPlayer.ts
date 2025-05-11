import { ref, onMounted } from 'vue'
import { musicMockData } from '../data/music-data'
import { useAudioDuration } from './useAudioDuration'
import { useVolumeControl } from './useVolumeContoll'

export const useAudioPlayer = () => {
  let audio: HTMLAudioElement | null = null
  const isPlaying = ref<boolean>(false)
  const trackIndex = ref<number>(0)
  const { duration, currentTime, setCurrentTime } = useAudioDuration(audio)
  const { volume, changeVolume } = useVolumeControl(audio)

  const setupAudio = (index: number) => {
    if (audio) {
      audio.pause()
    }
    audio = new Audio(musicMockData[index].src)

    audio.load()

    if (isPlaying.value) {
      audio.play()
    }
  }
  onMounted(() => {
    setupAudio(trackIndex.value)
  })

  const play = () => {
    if (!audio) return
    audio.play()
    isPlaying.value = true
  }

  const pause = () => {
    if (!audio) return
    audio.pause()
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
    volume,
    changeVolume,
  }
}
