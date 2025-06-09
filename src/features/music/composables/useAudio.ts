import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDuration } from './useDuration'
import { useVolume } from './useVolume'
import { useAudioData } from './useAudioData'
import { useRepeat } from './useRepeat'
import { useTracks } from './useTracks'

export const useAudio = () => {
  const audioRef = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref<boolean>(false)
  const { duration, currentTime, setCurrentTime } = useDuration(audioRef)
  const { volume, changeVolume, getVolume, toggleMute } = useVolume(audioRef)
  const { data, setAudioData, audioData, shuffleData } = useAudioData()
  const { repeatMode, toggleRepeatMode } = useRepeat()
  const { trackIndex, nextTrack, prevTrack } = useTracks({
    repeatMode,
    repeatTrack,
    data,
    setupAudio,
  })

  function setupAudio(index: number) {
    if (audioRef.value) {
      audioRef.value.pause()
    }

    audioRef.value = new Audio(data.value[index].src)

    setAudioData(index)

    audioRef.value.load()

    audioRef.value.volume = getVolume()

    if (isPlaying.value) {
      audioRef.value.play()
    }
  }

  function repeatTrack() {
    setupAudio(trackIndex.value)
    if (!isPlaying.value) {
      play()
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
    shuffleData,
    toggleMute,
    repeatMode,
    toggleRepeatMode,
  }
}
