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
        data: {
            type: Array,
            required: true,
            default: []
        },
        columns: {
            type: Array,
            required: true,
            default: [
                {
                    prop: '',
                    label: '',
                    operation: []
                }
            ]
        }
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