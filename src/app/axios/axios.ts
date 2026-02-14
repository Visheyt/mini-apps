import axios, { type AxiosError } from 'axios'

const unsplashApi = axios.create({
  baseURL: import.meta.env.VITE_GALLERY_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${import.meta.env.VITE_GALLERY_API_KEY}`,
  },
  timeout: 10000,
})

unsplashApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('API Error:', error.message)
    return Promise.reject(error)
  },
)

export default unsplashApi
