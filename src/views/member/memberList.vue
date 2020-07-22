<template>
<div class="app-container">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClickOrEdit(scope.row, 'see')" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="handleClickOrEdit(scope.row, 'edit')">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
   >
    <el-form ref="form" :model="dialogItem" label-width="80px">
      <el-form-item label="会员名称">
        <el-input v-model="dialogItem.name" :disabled="dialogType=='edit' ? false: true"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="dialogItem.address" :disabled="dialogType=='edit' ? false: true"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-input v-model="dialogItem.date" :disabled="dialogType=='edit' ? false: true"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleOK">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
      return {
        dialogVisible:false,
        dialogType: '',
        dialogItem: {},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id: 1
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          id: 2
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          id: 3
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          id: 4
        }]
      }
  },
  methods: {

    // 查看或者编辑事件
    handleClickOrEdit(row, type) {
      let newRow = Object.assign({}, row);
      this.dialogType = type;
      this.dialogVisible = !this.dialogVisible;
      this.dialogItem = newRow;
    },

    handleOK() {
      if(this.dialogType == 'edit') {
        for(let i = 0; i< this.tableData.length; i++) {
          if(this.tableData[i].id == this.dialogItem.id) {
            this.tableData[i] = Object.assign( this.tableData[i],this.dialogItem)
          }
        }
      }
       this.dialogVisible = false;
    }
  }
}
</script>

<style>

</style>