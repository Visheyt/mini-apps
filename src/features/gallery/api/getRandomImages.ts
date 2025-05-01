import { baseUrl, key } from '.'
import type { ImageResponse } from './types'

export const getRandomImages = async () => {
  try {
    const response = await fetch(`${baseUrl}random?count=30&orientation=landscape&client_id=${key}`)
    const data: ImageResponse[] = await response.json()

    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}
