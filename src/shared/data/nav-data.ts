import GalleryIcon from '../icons/GalleryIcon.vue'
import MusicIcon from '../icons/MusicIcon.vue'
import WeatherIcon from '../icons/WeatherIcon.vue'

export const navData = [
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
