import { ref, type Ref } from 'vue'
import type { RepeatType } from './useRepeat'
import type { Track } from '../data/music-data'

type Params = {
  repeatMode: Ref<RepeatType>
  repeatTrack: () => void
  setupAudio: (index: number) => void
  data: Ref<Track[]>
}
export const useTracks = ({ repeatMode, repeatTrack, data, setupAudio }: Params) => {
  const trackIndex = ref<number>(0)

  const nextTrack = () => {
    if (repeatMode.value === 'one') {
      repeatTrack()
      return
    }
    if (trackIndex.value < data.value.length - 1) {
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
      trackIndex.value = data.value.length - 1
    }
    setupAudio(trackIndex.value)
  }

  return { prevTrack, nextTrack, trackIndex }
}
