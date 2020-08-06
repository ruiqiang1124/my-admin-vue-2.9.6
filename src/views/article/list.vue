<template>
    <div class="app-container">
        <HrqTable
            v-loading="loading"
            :columns="columns"
            :data="tableData"
        ></HrqTable>
    </div>
</template>

<script>
import HrqTable from "@/components/HrqTable/HrqTable";
import {Table} from "element-ui"

import {getArticleList} from "@/api"
export default {
    components: {
        HrqTable
    },
    data() {
        return {  
            tableData: [],
            loading: true,
            columns: [
                {
                    prop: "id",
                    label: "ID",
                },
                {
                    prop: 'time',
                    label: '日期'
                },
                {
                    prop: 'name',
                    label: '作者'
                },
                {
                    prop: 'importance',
                    label: '评级'
                },
                {
                    prop: 'title',
                    label: '标题'
                },
                {
                    prop: '',
                    label: '删除',
                    operation: [
                        {
                            label: '删除',
                            type: 'danger',
                            clickSuccess: scope => this.delete(scope)
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        console.log(Table)
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            console.log(111);
            getArticleList().then(res => {
                if(res.articles.state == 200) {
                    this.tableData = res.articles.data;
                    this.loading = false
                }
            })
        },

        delete(scope) {
            this.$confirm("此操作将永远删除该文件，是否继续？", "提示", {
                type: "warning",
            }).then(() => {
                let { tableData } = this;
                let newData = tableData.filter((item) => item.id != scope.id);
                this.tableData = newData;
                this.$message({
                type: "success",
                    message: "删除成功!",
                });
            });
        }
    }
}
</script>

<style>

</style>