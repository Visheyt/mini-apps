import { baseUrl, key } from '.'
import type { ImageResponse } from './types'

export const getImages = async (query: string): Promise<ImageResponse[]> => {
  try {
    const response = await fetch(`${baseUrl}search/photos?page=1&query=${query}&client_id=${key}`)
    const json = await response.json()

    return json.results
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}
