import type { ImageResponse } from '@/widgets/gallery/models/types'
import { useFetch } from '@/shared/composables/useFetch'
import { onMounted, ref, watch } from 'vue'
import { getRandomImages } from '../api/getRandomImages'
import { getImages } from '../api/getImages'

export const useGallery = () => {
  const query = ref<string>('')

  const { loading, error, data, execute } = useFetch<ImageResponse[]>()

  onMounted(() => {
    execute(getRandomImages)
  })

  const searchImages = () => execute(() => getImages(query.value))

  return {
    loading,
    error,
    data,
    query,
    searchImages,
  }
}
