<template>
  <div>
    <el-card class="login">
      <h3 class="login-title">系统登录</h3>
      <el-form :model="form" :rules="rules" label-width="70px" ref="login">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { getMenu } from "../../api/perssionAPI";

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
      this.$refs.login.validate(success => {
        if (success) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              Cookie.set("token", data.data.token);
              Cookie.set("menu", JSON.stringify(data.data.menu));
              this.$store.commit("setTab", data.data.menu);
              this.$router.push("/");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
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