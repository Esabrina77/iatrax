import { createRouter, createWebHistory } from 'vue-router'
//site vitrine
import Contact from '@/views/SiteVitrine/Contact/Contact.vue'
import Home from '@/views/SiteVitrine/Home/Home.vue'
import Product from '@/views/SiteVitrine/Product/Product.vue'
import Avantages from '@/views/SiteVitrine/Avantages/Avantages.vue'
import Users from '@/views/SiteVitrine/Users/Users.vue'
import Tarifs from '@/views/SiteVitrine/Tarifs/Tarifs.vue' 
import Blog from '@/views/SiteVitrine/Blog/Blog.vue'
import BlogArticle from '@/views/SiteVitrine/BlogArticle/BlogArticle.vue' 
import Mesure from '@/views/SiteVitrine/Mesure/Mesure.vue'
//extranet
import Login from '@/views/Extranet/Login/Login.vue'
import Signup from '@/views/Extranet/Signup/Signup.vue'
import ForgotPassword from '@/views/Extranet/ForgotPassword/ForgotPassword.vue'

const routes = [
  //redirection vers la page d'accueil si l'url est inconnue
{ path: '/:pathMatch(.*)*', redirect: { name: 'Home' } },

  //site vitrine
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/product',
  name: 'Produit',
  component: Product
},
{
  path: '/advantages',
  name: 'Avantages',
  component: Avantages
},
{
  path: '/users',
  name: 'Users',
  component: Users
},
{
  path: '/pricing',
  name: 'Tarifs',
  component: Tarifs
},
{
  path: '/blog',
  name: 'Blog',
  component: Blog
},
//article du blog
{
  path: '/blog/:id',
  name: 'Article',
  component: BlogArticle
},
{
  path: '/custom',
  name: 'Sur mesure',
  component: Mesure
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
