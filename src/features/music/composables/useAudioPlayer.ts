import { ref, onMounted, onUnmounted } from 'vue'
import { musicMockData } from '../data/music-data'
import { useAudioDuration } from './useAudioDuration'
import { useVolumeControl } from './useVolumeContoll'
import { useAudioData } from './useAudioData'

export const useAudioPlayer = () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref<boolean>(false)
  const trackIndex = ref<number>(0)
  const { duration, currentTime, setCurrentTime } = useAudioDuration(audioRef)
  const { volume, changeVolume, getVolume } = useVolumeControl(audioRef)
  const { setAudioData, audioData } = useAudioData()

  const setupAudio = (index: number) => {
    if (audioRef.value) {
      audioRef.value.pause()
    }
    audioRef.value = new Audio(musicMockData[index].src)

    setAudioData(index)

    audioRef.value.load()

    audioRef.value.volume = getVolume()

    if (isPlaying.value) {
      audioRef.value.play()
    }
  }

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

  onMounted(() => {
    setupAudio(trackIndex.value)
  })

  onUnmounted(() => {
    audioRef.value?.pause()
    audioRef.value = null
  })

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
    audioData,
  }
}
