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
    audioData.artist = musicMockData[index].artist
    audioData.name = musicMockData[index].name
    audioData.imgSrc = musicMockData[index].img
  }
  return {
    audioData,
    setAudioData,
  }
}
