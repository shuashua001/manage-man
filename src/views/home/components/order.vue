<template>
  <div class="order">
    <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding: 0}">
      <i :style="{background:item.color}" :class="`el-icon-${item.icon}`" class="icon"></i>
      <div class="detail">
        <p class="price">￥{{item.value}}</p>
        <p class="text">{{item.data}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countData: [
        {
          data: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          data: "今日未支付订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          data: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          data: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          data: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          data: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.order {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    color: #ffffff;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .text {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
</style>