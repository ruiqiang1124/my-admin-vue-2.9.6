<template>
    <div>
        <el-table :data="data">
            <template  v-for="(item, index) in columns" >
                <template v-if="!item.operation">
                    <el-table-column :key="index" :prop="item.prop" :label="item.label"></el-table-column>
                </template>
                <template v-if="item.operation">
                    <el-table-column :key="index" :label="item.label" >
                        <template slot-scope="scope">
                            <template v-for="(btn, index) in item.operation">
                                <el-button :type="btn.type" :key="index" @click.native.prevent="btn.clickSuccess(scope.row)" >{{btn.label}}</el-button>
                            </template>
                        </template>
                    </el-table-column>
                </template>
            </template>
        </el-table>
        <div class="paginationBox">
            <el-pagination
                layout="prev, pager, next"
                :total="50"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        // 表格数据
        data: {
            type: Array,
            required: true,
            default: () => []
        },
        /**
         * 字段列信息
         * {
         *       label: '名称',
         *       prop: '字段属性',
         * }
         */
        columns: {
            type: Array,
            required: true,
            default: () => []
        },
        // 是否分页
        pagination: {
            type: Boolean,
            default: true
        },
        // 是否显示序号列
        sequence: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleCurrentChange(e) {
            this.$emit("OnpaginationChange", e)
        }
    }
}
</script>

<style scoped>
    .paginationBox {
        margin-top: 15px;
        text-align: right;
    }
</style>