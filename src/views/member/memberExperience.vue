<template>
  <div class="app-container">
	  <hrq-table 
	  	:data="tableData" 
		:columns="columns"
	  	@OnpaginationChange="paginationChange"
	  ></hrq-table>
  </div>
</template>

<script>
import HrqTable from "@/components/HrqTable/HrqTable";
export default {
  data() {
    return {
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id: 1
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:2
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:3
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:4
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:5
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:6
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
		  zip: 200333,
		  id:7
        }],
	  	columns: [
		  {
			  prop: 'date',
			  label: '日期',
			  id: 2
		  },
		  {
			  prop: "name",
			  label: '姓名',
			  id: 3
		  },
		  {
			  prop: "province",
			  label: "省份",
			  id: 4
		  },
		  {
			  prop: "city",
			  label: "市区",
			  id: 5
		  },
		  {
			  prop: "address",
			  label: "地址",
			  id: 6
		  },
		  {
			  prop: "zip",
			  label: "邮编",
			  id: 7
		  },
		  {
			  prop: "",
			  label: "操作",
			  id: 8,
			  operation: [
				  {
					label: '编辑',
					id: 1,
					clickSuccess: scope => this.edit(scope)
				  },
				  {
					  label: '删除',
					  type: 'danger',
					  id: 2,
					  clickSuccess: scope => this.delete(scope)
				  }
				  
			  ]
		  }
	  ]
    };
  },
  components: {
    HrqTable,
  },
  mounted() {},
  methods: {
	  delete(scope) {
		  this.$confirm("此操作将永远删除该文件，是否继续？", '提示', {
			  type: 'warning'
		  }).then(() => {
			let {tableData} = this;
			let newData = tableData.filter(item => item.id != scope.id);
			this.tableData = newData;
			this.$message({
				type: 'success',
				message: '删除成功!'
          	});
		  })
		  
	  },
	  edit(scope) {
		  console.log('编辑');
		  console.log(scope);
		  
	  },
	  paginationChange(e) {
		  console.log(e)
	  }
  },
};
</script>

<style>
</style>