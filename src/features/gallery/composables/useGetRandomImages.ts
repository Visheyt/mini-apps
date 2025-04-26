import { onMounted, ref } from 'vue'
import { getRandomImages } from '../api/get-random-images'
import type { ImageResponse } from '../api/types'

export const useGetRandomImages = () => {
  const loading = ref(false)
  const error = ref<null | string>(null)
  const images = ref<ImageResponse[]>([])

  onMounted(() => {
    loading.value = true
    getRandomImages()
      .then((res) => {
        if (res?.length) {
          images.value = res
        }
      })
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false))
  })
  return {
    loading,
    error,
    images,
  }
}
