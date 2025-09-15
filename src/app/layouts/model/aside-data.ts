import GalleryIcon from '@/shared/icons/GalleryIcon.vue'
import MusicIcon from '@/shared/icons//MusicIcon.vue'
import WeatherIcon from '@/shared/icons/WeatherIcon.vue'

export const asideData = [
  {
    id: 0,
    icon: WeatherIcon,
    to: '/',
    name: 'Weather',
  },

  {
    id: 1,
    icon: GalleryIcon,
    to: '/gallery',
    name: 'Gallery',
  },
  {
    id: 2,
    icon: MusicIcon,
    to: '/music',
    name: 'Music',
  },
]
