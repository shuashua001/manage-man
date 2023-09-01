<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAsie />
      </el-aside>
      <el-container>
        <el-header>
          <commonHeader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsie from "../../components/commonAise.vue";
import CommonHeader from "../../components/commonHeader.vue";

export default {
  components: {
    CommonAsie,
    CommonHeader
  }
};
</script>

<style>
.el-header {
  padding: 0;
}
</style>