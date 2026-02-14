import unsplashApi from '@/app/axios/axios'
import type { ImageResponse, RandomImagesResponse } from '../model/types'
import type { AxiosResponse } from 'axios'

const getImages = async (query: string) => {
  const response: AxiosResponse<ImageResponse[]> = await unsplashApi.get(
    `/search/photos?page=1&query=${query}`,
  )

  return response.data
}

const getRandomImages = async () => {
  const response: AxiosResponse<RandomImagesResponse> = await unsplashApi.get(
    `/photos/random?count=30&orientation=landscape`,
  )

  return response.data.results
}

export const api = {
  getImages,
  getRandomImages,
}
