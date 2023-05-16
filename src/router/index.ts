import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: () => import('@/views/LobbyView.vue')
  },
  {
    path: '/authorisation',
    name: 'authorisation',
    component: () => import('@/views/AuthorisationView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
