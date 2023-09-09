import { getHomeDataApi } from "@/api/homeAPI";

export default{
  state: {
    homeData: {str:1}
  },
  mutations: {
    changeHomeData(state,res) {
      state.homeData = res.data.data
      // console.log(state.homeData);
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