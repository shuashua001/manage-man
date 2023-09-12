<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">+ 新增</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <!-- 新增表单 -->
      <el-form ref="form" :model="form" label-width="100px" :inline="true">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="form.birth" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: ""
      }
    };
  }
};
</script>

<style>
</style>