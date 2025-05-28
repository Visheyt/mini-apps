import { ref, onMounted, onUnmounted, watch } from 'vue'
import { musicMockData } from '../data/music-data'
import { useDuration } from './useDuration'
import { useVolume } from './useVolume'
import { useAudioData } from './useAudioData'
import { useRepeat } from './useRepeat'

export const useAudio = () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref<boolean>(false)
  const trackIndex = ref<number>(0)
  const { duration, currentTime, setCurrentTime } = useDuration(audioRef)
  const { volume, changeVolume, getVolume, toggleMute } = useVolume(audioRef)
  const { setAudioData, audioData } = useAudioData()
  const { repeatMode, toggleRepeatMode } = useRepeat()

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
    if (repeatMode.value === 'one') {
      repeatTrack()
      return
    }
    if (trackIndex.value < musicMockData.length - 1) {
      trackIndex.value += 1
    } else {
      trackIndex.value = 0
    }
    setupAudio(trackIndex.value)
  }

  const prevTrack = () => {
    if (repeatMode.value === 'one') {
      repeatTrack()
      return
    }
    if (trackIndex.value > 0) {
      trackIndex.value -= 1
    } else {
      trackIndex.value = musicMockData.length - 1
    }
    setupAudio(trackIndex.value)
  }

  const repeatTrack = () => {
    setupAudio(trackIndex.value)
    if (!isPlaying.value) {
      play()
    }
  }

  watch(audioRef, (newAudio, oldAudio) => {
    if (oldAudio) {
      oldAudio.removeEventListener('ended', handleTrackEnd)
    }

    if (newAudio) {
      newAudio.addEventListener('ended', handleTrackEnd)
    }
  })

  onMounted(() => {
    setupAudio(trackIndex.value)
  })

  onUnmounted(() => {
    audioRef.value?.pause()
    audioRef.value?.removeEventListener('ended', handleTrackEnd)
    audioRef.value = null
  })

  const handleTrackEnd = () => {
    switch (repeatMode.value) {
      case 'no':
        break
      case 'one':
        repeatTrack()
        break
      case 'all':
        nextTrack()
        break
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
    audioData,
    toggleMute,
    repeatMode,
    toggleRepeatMode,
  }
}
