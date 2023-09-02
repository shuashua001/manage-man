import Vue from "vue";
import Vuex from 'vuex'
import asideFold from "./modules/asideFold";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    asideFold
  }
})

export {store}