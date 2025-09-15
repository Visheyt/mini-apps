import { getDownloadUrl } from '@/features/download-image/api/getDownloadUrl'
import { useFetch } from '@/shared/composables/useFetch'
import type { DownloadUrlRes } from './types'

export const useDownloadImage = (download_location: string) => {
  const { data, execute } = useFetch<DownloadUrlRes>()

  const handleDownload = async () => {
    await execute(() => getDownloadUrl(download_location))
    const url = data.value?.url
    if (!url) {
      return
    }

    const link = document.createElement('a')
    link.href = url
    link.download = 'unsplash-image.jpg'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return handleDownload
}
