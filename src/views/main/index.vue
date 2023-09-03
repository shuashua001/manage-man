<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAside />
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
import CommonAside from "../../components/commonAside.vue";
import CommonHeader from "../../components/commonHeader.vue";

export default {
  components: {
    CommonAside,
    CommonHeader
  }
};
</script>

<style>
.el-header {
  padding: 0;
}
</style>