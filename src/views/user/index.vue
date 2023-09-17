<template>
  <div class="user">
    <div class="user-head">
      <el-button type="primary" @click="addBtn()">+ 新增</el-button>
      <el-form :model="searchData" :inline="true">
        <el-form-item prop="name">
          <el-input v-model="searchData.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- 新增表单 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" :inline="true">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
    <div class="common-table">
      <el-table :data="tableData" style="height: 90%" stripe>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.sex == 0 ? '女':'男' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="birth" label="出生日期"></el-table-column>
        <el-table-column prop="addr" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editData(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delData(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="changePage"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getUserDataApi,
  addUserApi,
  delUserDataApi,
  editUserDataApi
} from "../../api/homeAPI";

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
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        birth: [{ required: true, message: "请选择出生如期" }],
        addr: [{ required: true, message: "请填写地址" }]
      },
      tableData: [],
      modelType: 0,
      pageData: {
        page: 1,
        limit: 10
      },
      total: 0,
      searchData: {
        name: ""
      }
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    addBtn() {
      this.dialogVisible = true;
      this.modelType = 0;
    },
    editData(data) {
      this.dialogVisible = true;
      this.modelType = 1;
      this.form = JSON.parse(JSON.stringify(data));
      // this.form = data;   错误写法
    },
    submit() {
      // console.log(this.$refs.form);
      this.$refs.form.validate(success => {
        // console.log(success);
        if (success) {
          if (this.modelType === 0) {
            addUserApi(this.form).then(() => {
              this.getList();
            });
          } else {
            editUserDataApi(this.form).then(() => {
              this.getList();
            });
          }

          this.dialogVisible = false;
          this.$refs.form.resetFields();
        }
      });
    },
    cancel() {
      this.dialogVisible = false;
      this.$refs.form.resetFields();
    },
    handleClose() {
      this.cancel();
    },
    getList() {
      getUserDataApi({ ...this.searchData, ...this.pageData }).then(res => {
        // console.log(res);
        this.tableData = res.data.list;
        this.total = res.data.count;
      });
    },
    delData(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUserDataApi({ id }).then(() => {
            this.getList();
          }),
            this.$message({
              type: "success",
              message: "删除成功!"
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    changePage(page) {
      // console.log(page);
      this.pageData.page = page;
      this.getList();
    },
    search() {
      this.getList();
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  height: 90%;
  .user-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .common-table {
    position: relative;
    height: calc(100% - 62px);
    .pager {
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>