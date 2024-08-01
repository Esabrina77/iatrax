import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Signup from '@/views/Signup/Signup.vue'
import ForgotPassword from '@/views/ForgotPassword/ForgotPassword.vue'
import Contact from '@/views/Contact/Contact.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '*',
  //   redirect: '/login'
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
