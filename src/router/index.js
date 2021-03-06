import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import FrontPage from '../components/FrontPage.vue'
import ProductCard from '../components/ProductCard.vue'
import VideoPlayer from '../components/VideoPlayerProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    mode: 'history',
    path: '/',
    name: 'FrontPage',
    component: FrontPage 
  },
  {
    path: '/products',
    name: 'ProductsCard',
    component: ProductCard
  },
  {
    path: '/videoplayer',
    name: 'VideoPlayer',
    component: VideoPlayer,
  }
]

const router = new VueRouter({
  routes
})

export default router
