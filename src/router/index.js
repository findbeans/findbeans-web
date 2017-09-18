import Vue from 'vue'
import Router from 'vue-router'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Movies
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    }
  ]
})
