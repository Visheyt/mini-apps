import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../features/weather/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: WeatherView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../features/gallery/GalleryView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../features/music/MusicView.vue'),
    },
  ],
})

export default router
