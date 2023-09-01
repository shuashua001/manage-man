import Vue from "vue";
import Router from "vue-router";
import Home from '@/views/home/index.vue'
import User from '@/views/user/index.vue'
import Main from "@/views/main/index.vue"
import Mall from "@/views/mall/index.vue"
import Page1 from "@/views/page/page1.vue"
import Page2 from "@/views/page/page2.vue"

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '/mall',
          component: Mall
        },
        {
          path: '/page1',
          component: Page1
        },
        {
          path: '/page2',
          component: Page2
        },
      ]
    },
  ],
  mode:'history'
})

export default router