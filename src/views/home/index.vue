<template>
  <div>
    <el-row>
      <el-col :span="8">
        <Userinfo />
        <Purchased />
      </el-col>
      <el-col :span="16">
        <Order />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Userinfo from "./components/userinfo.vue";
import Purchased from "./components/purchased.vue";
import Order from "./components/order.vue";

export default {
  components: {
    Userinfo,
    Purchased,
    Order
  }
};
</script>

<style lang="less" scoped>
</style>