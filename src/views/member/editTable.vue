<template>
  <div>
        <el-table
            :data="tableData"
            @cell-click="getCell"
            :cell-class-name="getRowColumn"
        >
            <el-table-column
                prop="date"
                label="日期"
                width="180">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.date" v-if="scope.row.index == tabRowIndex && scope.column.index == tabColumnIndex" autofocus @blur="inputBlur" :ref="'input'+scope.row.index+scope.column.index"></el-input>
                    <span v-else>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.name" v-if="scope.row.index == tabRowIndex && scope.column.index == tabColumnIndex" autofocus @blur="inputBlur" :ref="'input'+scope.row.index+scope.column.index"></el-input>
                    <span v-else>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.address" v-if="scope.row.index == tabRowIndex && scope.column.index == tabColumnIndex" autofocus @blur="inputBlur" :ref="'input'+scope.row.index+scope.column.index"></el-input>
                    <span v-else>{{scope.row.address}}</span>
                </template>
            </el-table-column>

        </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],

          tabRowIndex: null,  // 横坐标
          tabColumnIndex: null,     // 纵坐标
        }
    },
    methods: {
        // 点击单元格
        getCell(row, column, cell, event) {
            this.tabRowIndex  = row.index;
            this.tabColumnIndex = column.index;
             // input获取焦点
            let id = `input${row.index}${column.index}`;
            setTimeout(() => {
                this.$refs[id].focus()
            }, 20);
        },


        // 初始化表格的时候给每条数据赋值横坐标和纵坐标
        getRowColumn({row, column, rowIndex, columnIndex}) {
            row.index = rowIndex;
            column.index = columnIndex
        },

        // input失去焦点，取消编辑，坐标为空值
        inputBlur() {
            this.tabRowIndex = null;
            this.columnIndex = null;
        },
    }
}
</script>

<style>

</style>