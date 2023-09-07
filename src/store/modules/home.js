import { getHomeDataApi } from "@/api/homeAPI";

export default{
  state: {
    homeData: {}
  },
  mutations: {
    changeHomeData(state,res) {
      state.homeData = res.data.data
      // console.log(res);
    }
  },
  actions: {
    getHomeData(context) {
      getHomeDataApi().then(res => {
        return context.commit('changeHomeData',res)
      });
    }
  }
}