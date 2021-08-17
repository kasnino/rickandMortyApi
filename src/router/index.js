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
    path: '/about',
    name: 'About',
    meta: { layout: LayoutB },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
      
    },
    {
      path: '/search',
      name: 'search',
      meta: { layout: LayoutB },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Search.vue')
        
      }
  },
  {
    path: '/female',
    name: 'female',
    meta: { layout: LayoutB },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Female.vue')
      
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
