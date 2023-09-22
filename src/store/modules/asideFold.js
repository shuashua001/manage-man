import Cookie from "js-cookie"

export default {
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
    ],
    menuList: []
  },
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    changeTab(state, mune) {
      if (mune.name !== 'home') {
        const index = state.tabList.findIndex(item => item.name === mune.name)
        if (index == -1) {
          state.tabList.push(mune)
        }
      }
    },
    deleteList(state, index) {
      // console.log(data);
      state.tabList.splice(index, 1)
    },
    setTab(state, tab) {
      state.menuList = tab
    },
    addMenu(state, router) {
      // console.log(state.menuList);
      if (!Cookie.get('menu')) return
      const menu = JSON.parse(Cookie.get('menu'))
      state.menuList = menu
      const routeList = []
      menu.map(item => {
        if (item.children) {
          item.children = item.children.map(child => {
            child.component = () => import(`../../views/${child.url}`)
            return child
          })
          routeList.push(...item.children)
        } else {
          item.component = item.component = () => import(`../../views/${item.url}`)
          routeList.push(item)
        }
      })
      // console.log(routeList);
      routeList.forEach(item => {
        router.addRoute('Main', item)
      })
    }
  }
}