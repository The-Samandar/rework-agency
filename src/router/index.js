import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Cases from '@/pages/Cases.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Contacts from '@/pages/Contacts.vue'

const routes = [
  { path: '/',          name: 'Home',     component: Home },
  { path: '/services',  name: 'Services', component: Services },
  { path: '/cases',     name: 'Cases',    component: Cases },
  { path: '/about',     name: 'About',    component: About },
  { path: '/blog',      name: 'Blog',     component: Blog },
  { path: '/contacts',  name: 'Contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
