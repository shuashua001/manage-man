import Vue from "vue";
import Router from "vue-router";
import Home from '@/views/home/index.vue'
import User from '@/views/user/index.vue'
import Main from "@/views/main/index.vue"
import Mall from "@/views/mall/index.vue"
import Page1 from "@/views/page/page1.vue"
import Page2 from "@/views/page/page2.vue"
import Login from '@/views/login/index.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/user',
          name: 'user',
          component: User
        },
        {
          path: '/mall',
          name: 'mall',
          component: Mall
        },
        {
          path: '/page1',
          name: 'page1',
          component: Page1
        },
        {
          path: '/page2',
          name: 'page2',
          component: Page2
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ],
})

export default router