import { useFetch } from '@/shared/composables/useFetch'
import { getDownloadUrl } from '../api/getDownloadUrl'
import type { DownloadUrlRes } from '../api/types'

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
