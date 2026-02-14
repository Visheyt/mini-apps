import { api } from '@/entity/image/api/images-api'

export const useDownloadImage = (download_location: string) => {
  const handleDownload = async () => {
    const { url } = await api.getDownloadUrl(download_location)

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
