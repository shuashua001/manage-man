<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <Userinfo />
        <Purchased />
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <Order />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Userinfo from "./components/userinfo.vue";
import Purchased from "./components/purchased.vue";
import Order from "./components/order.vue";
import { getHomeData } from "../../api/homeAPI";

export default {
  components: {
    Userinfo,
    Purchased,
    Order
  },
  mounted() {
    getHomeData().then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="less" scoped>
</style>