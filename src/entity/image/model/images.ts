import { useQuery } from '@tanstack/vue-query'
import { api } from '../api/images-api'
import { imagesKeys } from './keys'
import type { Ref } from 'vue'

const useGetImages = (query: Ref<string>) => {
  return useQuery({
    queryKey: [imagesKeys.images, query],
    queryFn: () => api.getImages(query.value),
    enabled: false,
  })
}

const useGetRandomImages = () => {
  return useQuery({
    queryKey: [imagesKeys.randomImages],
    queryFn: api.getRandomImages,
    staleTime: 1000 * 60 * 5,
  })
}

export const images = {
  get: useGetImages,
  random: useGetRandomImages,
}
