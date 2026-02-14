import unsplashApi from '@/app/axios/axios'
import type { DownloadUrlRes, ImageResponse, RandomImagesResponse } from '../model/types'
import type { AxiosResponse } from 'axios'

const getImages = async (query: string) => {
  const response: AxiosResponse<RandomImagesResponse> = await unsplashApi.get(
    `/search/photos?page=1&query=${query}`,
  )

  return response.data.results
}

const getRandomImages = async () => {
  const response: AxiosResponse<ImageResponse[]> = await unsplashApi.get(
    `/photos/random?count=10&orientation=landscape`,
  )

  return response.data
}

const getDownloadUrl = async (downloadLocation: string) => {
  const response: AxiosResponse<DownloadUrlRes> = await unsplashApi.get(`${downloadLocation}`)

  return response.data
}

export const api = {
  getImages,
  getRandomImages,
  getDownloadUrl,
}
