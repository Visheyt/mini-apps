import { key } from '.'
import type { DownloadUrlRes } from './types'

export const getDownloadUrl = async (downloadLocation: string) => {
  try {
    const response = await fetch(`${downloadLocation}?client_id=${key}`)
    const data: DownloadUrlRes = await response.json()

    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}
