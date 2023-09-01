<template>
  <div class="header-container">
    <div class="l-head">
      <el-button icon="el-icon-menu" size="mini"></el-button>
      <span class="bread">首页</span>
    </div>
    <div class="r-head">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/images/aaa.png" alt class="img" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
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