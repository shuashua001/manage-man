<template>
  <div>
    <el-tag
      v-for="item in tags"
      :key="item.label"
      :effect="$route.name === item.name ? 'dark': 'plain' "
      :closable="item.name !== 'home'"
    >{{ item.label }}</el-tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      tags: state => state.asideFold.tabList
    })
  },
  mounted() {
    // console.log(this.tags);
    // console.log(this.$route);
  }
};
</script>

<style>
</style>