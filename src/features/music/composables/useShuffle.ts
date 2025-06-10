import { ref, type Ref } from 'vue'
import { musicMockData, type Track } from '../data/music-data'

type Params = {
  trackIndex: Ref<number>
  data: Ref<Track[]>
}

export const useShuffle = ({ data, trackIndex }: Params) => {
  const isShuffle = ref<boolean>(false)

  const shuffleData = () => {
    if (!isShuffle.value) {
      data.value = [...data.value].sort(() => Math.random() - 0.5)
      isShuffle.value = true
    } else {
      data.value = [...musicMockData]
      isShuffle.value = false
    }

    trackIndex.value = 0
  }

  return {
    isShuffle,
    shuffleData,
  }
}
