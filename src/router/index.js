import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Gallery from '../views/gallery.vue'
import Destination from '../views/destination.vue'
import Services from '../views/services.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
