import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/transcriptions',
      name: 'transcriptions',
      // route level code-splitting
      // this generates a separate chunk (Transcriptions.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TranscriptionsView.vue'),
    },
  ],
})

export default router
