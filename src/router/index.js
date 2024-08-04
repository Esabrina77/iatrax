import { createRouter, createWebHistory } from 'vue-router'
//site vitrine
import Contact from '@/views/SiteVitrine/Contact/Contact.vue'
import Home from '@/views/SiteVitrine/Home/Home.vue'
//extranet
import Login from '@/views/Extranet/Login/Login.vue'
import Signup from '@/views/Extranet/Signup/Signup.vue'
import ForgotPassword from '@/views/Extranet/ForgotPassword/ForgotPassword.vue'

const routes = [
  //site vitrine
{
  path: '/',
  name: 'Home',
  component: Home
},



  //extranet
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
