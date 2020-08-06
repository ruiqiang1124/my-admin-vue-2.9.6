<template>
    <div class="app-container">
        <demo-table
            :data="tableData"
            :columns="columns"
            :pagination="pagination"
            @current-change="currentChange"
        >
        </demo-table>
    </div>
</template>

<script>
import DemoTable from "@/components/DemoTable"
export default {
    components: {
        DemoTable
    },
    data() {
        return {
            tableData: [
                {
                    name: 'kevin',
                    sex: 1,
                    age: 18,
                    id: 1
                },
                {
                    name: 'Aaron',
                    sex: 2,
                    age: 12,
                    id: 2
                },
                {
                    name: 'Caleb',
                    sex: 1,
                    age: 19,
                    id: 3
                },
                {
                    name: 'Eddie',
                    sex: 2,
                    age: 18,
                    id: 4
                },
                {
                    name: 'Eric',
                    sex: 1,
                    age: 22,
                    id: 5
                },
                {
                    name: 'Angus',
                    sex: 2,
                    age: 23,
                    id: 6
                },
                {
                    name: 'Alex',
                    sex: 1,
                    age: 30,
                    id: 7
                },
                {
                    name: 'CoCo',
                    sex: 1,
                    age: 25,
                    id: 8
                }
            ],
            pagination: {
                total: 1000,
                
            },
            columns: [
                {
                    label: '姓名',
                    prop: 'name',
                },
                {
                    label: '性别',
                    prop: 'sex',
                    formatter(row, column, cellValue) {
                        return row.sex === 1 ? '男' : '女'
                    }
                },
                {
                    label: '年龄',
                    prop: 'age',
                },
                {
                    label: '操作',
                    actions: [
                        {
                            id: '1',
                            text: '编辑',
                            click:  this.handleEdit
                        },
                        {
                            id: 2,
                            text: '删除',
                            type: 'danger',
                            click: this.delete
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleEdit(row) {
            console.log(row)
        },
        delete(row) {
            console.log(row);
            this.$confirm("此操作将永远删除，是否继续？", "提示", {
                type: "warning",
            }).then(() => {
                let { tableData } = this;
                let newData = tableData.filter((item) => item.id != row.id);
                this.tableData = newData;
                this.$message({
                type: "success",
                    message: "删除成功!",
                });
            });
        },
        currentChange(page) {
            console.log(page)
        }
    }
}
</script>

<style>

</style>