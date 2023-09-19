<template>
  <div>
    <el-card class="login">
      <h3 class="login-title">系统登录</h3>
      <el-form :model="form" :rules="rules" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Mock from "mockjs";
import Cookie from "js-cookie";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      const token = Mock.Random.guid();
      Cookie.set("token", token);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.el-card {
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  /deep/.el-card__body {
    padding: 0;
  }
  .login-title {
    margin: 0 auto 40px;
    text-align: center;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  .el-button {
    margin-left: 30px;
  }
}
</style>