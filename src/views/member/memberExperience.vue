<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="growth_memberid"
      label="会员ID"
      align="center"
    >
    </el-table-column>
    <el-table-column
      prop="growth_membername"
      label="会员名称"
      align="center"
    >
    </el-table-column>
    <el-table-column
      prop="growth_points"
      align="center"
      label="经验值">
    </el-table-column>
    <el-table-column
      prop="growth_addtime"
      align="center"
      label="添加时间">
    </el-table-column>
    <el-table-column
      prop="growth_stage"
      align="center"
      label="操作阶段">
    </el-table-column>
    <el-table-column
      prop="growth_desc"
      label="操作描述">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {getMemberExperienceList} from "@/api/index.js";
export default {
  data() {
      return {
        tableData: []
      }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
        getMemberExperienceList().then(res => {
          console.log(res);
          
          this.tableData = res.list;
        })
    }
  }
}
</script>

<style>

</style>