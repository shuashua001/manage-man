<template>
  <div>
    <el-card class="buy">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val" :key="key"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          todayBuy: 500,
          monthBuy: 3500,
          totalBuy: 22000
        },
        {
          name: "vivo",
          todayBuy: 300,
          monthBuy: 2200,
          totalBuy: 24000
        },
        {
          name: "iphone",
          todayBuy: 800,
          monthBuy: 4500,
          totalBuy: 65000
        },
        {
          name: "小米",
          todayBuy: 1200,
          monthBuy: 6500,
          totalBuy: 45000
        },
        {
          name: "vivo",
          todayBuy: 300,
          monthBuy: 2200,
          totalBuy: 24000
        },
        {
          name: "iphone",
          todayBuy: 800,
          monthBuy: 4500,
          totalBuy: 65000
        },
        {
          name: "小米",
          todayBuy: 1200,
          monthBuy: 6500,
          totalBuy: 45000
        }
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.buy {
  margin-top: 20px;
  height: 460px;
}
</style>