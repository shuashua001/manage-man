import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import { Button, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router';
import { store } from './store';
import './api/mock'
import Cookie from 'js-cookie';

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Row)
// Vue.use(Button)

router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')
  // console.log(to);
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  created() {
    store.commit('addMenu', router)
  },
  render: h => h(App),
}).$mount('#app')
