import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {path: '/', component: 'Landing'},
  {path: '/signin', component: 'Signin'},
  {path: '/signup', component: 'Signup'},
  {path: '/home', component: 'Home'},
  {path: '/about', component: 'About'},
  {path: '/listado-total', component: 'Listado-Total'},
  {path: '/consultar-usuario', component: 'Consultar-Usuario'}
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
