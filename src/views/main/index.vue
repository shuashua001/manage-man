<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAsie />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsie from "../../components/commonAise.vue";

export default {
  components: {
    CommonAsie
  }
};
</script>

<style>
</style>