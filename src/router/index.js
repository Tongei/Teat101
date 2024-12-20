import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import UserView from '@/views/UserView.vue'
import UsersView from '@/views/UsersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
})

export default router
