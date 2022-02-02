import { createRouter, createWebHashHistory } from 'vue-router'

import lifeListRoutes from "../modules/lifeList/routes/index.js"

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    redirect: '/days',
  },

  ...lifeListRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
