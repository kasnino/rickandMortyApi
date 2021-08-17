import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LayoutB from '@/layouts/LayoutDefault.vue'
import LayoutA from '@/layouts/LayoutSimple.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: LayoutA }
  },
  {
    path: '/portada',
    name: 'Portada',
    meta: { layout: LayoutB },
    component: function () {
      return import('../views/Portada.vue')
    }
  },

]

const router = new VueRouter({
  scrollBehavior() {
    return {x: 0, y: 0}
},
scrollBehavior() {
  document.getElementById('app').scrollIntoView();
},
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
