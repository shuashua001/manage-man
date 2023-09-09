<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <Userinfo />
        <Purchased />
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <Order />
        <el-card style="height: 280px" id="linear"></el-card>
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
import * as echarts from "echarts";
import { mapState } from "vuex";

export default {
  components: {
    Userinfo,
    Purchased,
    Order
  },
  computed: {
    getOrderData() {
      return this.$store.state.home.homeData.orderData;
    }
  },
  methods: {
    writeLinear() {
      const linear = echarts.init(document.getElementById("linear"));
      const linearOption = {};
      console.log(this.orderData);

      const proName = Object.keys(this.orderData.data[0]);
      linearOption.xAxis = {
        data: proName
      };
      linearOption.yAxis = {};
      linearOption.legend = {
        data: proName
      };
      linearOption.series = [];
      proName.forEach(key => {
        linearOption.series.push({
          name: key,
          type: "line",
          data: orderData.data.map(item => item[key])
        });
      });
      linear.setOption(linearOption);
    }
  },
  mounted() {
    this.$store.dispatch("getHomeData");
    // this.writeLinear();
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