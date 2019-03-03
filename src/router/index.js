import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import Index from '@/page/home/Index'
import Home from '@/page/home/Home'
import Categories from '@/page/categories/Categories'
import Cart from '@/page/cart/Cart'
import Me from '@/page/me/Me'
import BookDetail from '@/page/bookdetail/BookDetail'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/books/id',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
