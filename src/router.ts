import { createRouter, createWebHistory } from 'vue-router'
import TestVue from './views/Test.vue'
import Home from './views/Home.vue'
import ChangeView from './components/mars-work/ChangeView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: TestVue
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: ChangeView
    },
  ]
})

export default router
