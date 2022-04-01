import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/HelloWorld',
    name:'HelloWorld',
    component:()=>import('../components/HelloWorld.vue')
  },
  {
    path:'/python',
    name:'python',
    component:() => import('../views/code/PyThon.vue')
  },
  {
    path:'/typeScripy',
    name:'typeScripy',
    component:() => import('../views/code/TypeScripy')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/xiaobo',
    name:'xiaobo',
    component:()=> import('../views/newrouter/NewFu.vue')
  } 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
