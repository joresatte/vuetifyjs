import Vue from 'vue'
import VueRouter from 'vue-router'
import signUp from '../views/signUp.vue'
import project from '../views/project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/project',
    name: 'project',
    component: project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
