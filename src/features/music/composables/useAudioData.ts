import { reactive, ref } from 'vue'
import { musicMockData } from '../data/music-data'

export const useAudioData = () => {
  const audioData = reactive({
    imgSrc: '',
    name: '',
    artist: '',
  })

  const data = ref([...musicMockData])

  const setAudioData = (index: number) => {
    audioData.artist = data.value[index].artist
    audioData.name = data.value[index].name
    audioData.imgSrc = data.value[index].img
  }

  return {
    audioData,
    setAudioData,
    data,
  }
}
