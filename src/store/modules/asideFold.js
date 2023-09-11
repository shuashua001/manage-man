export default{
  state: {
    isCollapse: false,
    tabList: [
      {
      path: "/",
      name: "home",
      label: "首页",
      icon: "s-home",
      url: "Home/Home"
    }
  ]
  },
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    changeTab(state,mune) {
      if(mune.name !== 'home') {
        const index = state.tabList.findIndex(item => item.name === mune.name)
        if(index == -1){
          state.tabList.push(mune)
        }
      }
    },
    deleteList(state,index) {
      // console.log(data);
      state.tabList.splice(index,1)
    }
  }
}