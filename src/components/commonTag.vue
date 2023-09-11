<template>
  <div class="tag">
    <el-tag
      v-for="(item,index) in tags"
      :key="item.label"
      :effect="$route.name === item.name ? 'dark': 'plain' "
      :closable="item.name !== 'home'"
      size="small"
      @click="changeTag(item)"
      @close="deleteTag(item,index)"
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
  methods: {
    changeTag(item) {
      // console.log(item);
      this.$router.push(item.path);
    },
    deleteTag(item, index) {
      // console.log(item, index);
      this.$store.commit("deleteList", index);
      const length = this.$store.state.asideFold.tabList.length;
      if (this.$route.name !== item.name) {
        return;
      }
      if (length === index) {
        this.$router.push(this.tags[index - 1].path);
      } else {
        this.$router.push(this.tags[index].path);
      }
    }
  },
  mounted() {
    // console.log(this.tags);
    // console.log(this.$route);
  }
};
</script>

<style lang="less" scoped>
.tag {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
  }
}
</style>