<template>
  <div>
    <el-row>
      <el-col :span="8">
        <Userinfo />
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Userinfo from "./components/userinfo.vue";
export default {
  components: {
    Userinfo
  }
};
</script>

<style lang="less" scoped>
</style>