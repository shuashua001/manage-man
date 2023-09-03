<template>
  <div>
    <el-card class="box-card">
      <div class="user">
        <img src="@/assets/images/aaa.png" alt />
        <div class="userinfo">
          <p class="name">Admin</p>
          <p class="access">超级管理员</p>
        </div>
      </div>
      <div class="logininfo">
        <p>
          上次登录时间：
          <span>1924-8-8</span>
        </p>
        <p>
          上次登录地点：
          <span>北京</span>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
  padding-bottom: 20px;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}
.logininfo {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
</style>