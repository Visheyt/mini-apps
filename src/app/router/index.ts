import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: ()=>import('../../pages/weather')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../../pages/gallery'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../../pages/music'),
    },
  ],
})

export default router
