<template>
  <div class="header-container">
    <div class="l-head">
      <el-button @click="changeAside()" icon="el-icon-menu" size="mini" style="margin-right: 20px"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tab"
          :key="item.name"
          :to="{ path: item.path }"
        >{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-head">
      <el-dropdown @command="logout">
        <span class="el-dropdown-link">
          <img src="../assets/images/aaa.png" alt class="img" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    changeAside() {
      this.$store.commit("changeCollapse");
    },
    logout(data) {
      if (data === "logout") {
        Cookie.remove("token");
        Cookie.remove("menu");
        this.$router.push("/login");
      }
    }
  },
  computed: {
    tab() {
      return this.$store.state.asideFold.tabList;
    }
  }
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l-head {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        &.is-link {
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          color: #ffffff;
        }
      }
    }
    .bread {
      color: #ffffff;
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .r-head {
    .img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>