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
          <el-card style="height: 260px">
            <div ref="columnar" style="height: 260px"></div>
          </el-card>
          <el-card style="height: 260px">
            <div ref="pancake" style="height: 240px"></div>
          </el-card>
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

export default {
  components: {
    Userinfo,
    Purchased,
    Order
  },
  computed: {
    getOrderData() {
      return this.$store.state.home.homeData;
    }
  },
  watch: {
    getOrderData(newval, oldval) {
      // console.log(newval);
      this.writeLinear(newval.orderData);
      this.writeColumnar(newval.userData);
      this.writePancake(newval.videoData);
    }
  },
  methods: {
    writeLinear(orderData) {
      const linear = echarts.init(document.getElementById("linear"));
      const linearOption = {};
      // console.log(this.orderData);

      const proName = Object.keys(orderData.data[0]);
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
    },
    writeColumnar(userData) {
      const columnar = echarts.init(this.$refs.columnar);
      const columnarOption = {
        legend: {
          textStyle: {
            color: "#333"
          }
        },
        gird: {
          left: "20%"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: userData.map(item => item.data),
          axisLine: {
            lineStyle: {
              color: "#17b3a3"
            }
          },
          axisLabel: {
            interval: 0,
            color: "#333"
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3"
            }
          }
        },
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            type: "bar",
            data: userData.map(item => item.new)
          },
          {
            name: "活跃用户",
            type: "bar",
            data: userData.map(item => item.active)
          }
        ]
      };
      columnar.setOption(columnarOption);
    },
    writePancake(videoData) {
      const pancake = echarts.init(this.$refs.pancake);
      const pancakeOption = {
        tooltip: {
          trigger: "item"
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf"
        ],
        series: {
          type: "pie",
          data: videoData
        }
      };
      pancake.setOption(pancakeOption);
    }
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