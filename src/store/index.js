import Vue from "vue";
import Vuex from 'vuex'
import asideFold from "./modules/asideFold";
import home from './modules/home'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    asideFold,
    home
  }
})

export {store}