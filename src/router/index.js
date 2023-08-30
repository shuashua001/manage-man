import Vue from "vue";
import Router from "vue-router";
import Home from '@/views/home/index.vue'
import User from '@/views/user/index.vue'
import Main from "@/views/main/index.vue";

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
      ]
    },
  ]
})

export default router