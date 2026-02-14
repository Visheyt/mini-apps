import unsplashApi from '@/app/axios/axios'

export const getRandomImages = async () => {
  const response = await unsplashApi.get(`/photos/random?count=30&orientation=landscape`)

  return response.data
}
