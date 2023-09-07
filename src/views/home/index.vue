<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <Userinfo />
        <Purchased />
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <Order />
        <el-card style="height: 280px"></el-card>
        <div class="graph">
          <el-card style="height: 260px"></el-card>
          <el-card style="height: 260px"></el-card>
        </div>
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
  },
  mounted() {
    this.$store.dispatch("getHomeData");
  }
};
</script>

<style lang="less" scoped>
.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-card {
    width: 48%;
  }
}
</style>