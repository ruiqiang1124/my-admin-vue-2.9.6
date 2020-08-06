import { data } from "autoprefixer";

export default {
    name: 'DemoTable',
    props: {
        // 表格数据
        data: {
            type: Array,
            default: () => []
        },
        /**
         * 表格列信息
         * {
         *      label: '名称',
         *      prop: '字段属性',
         *   
         * }
         */
        columns: {
            type: Array,
            default: () => []
        },
        /**
         * 分页数据
         * {
         *      total: '总数据',
         *      layout="prev ,pager, next"
         * }
         */
        pagination: {
            type: [Object, Boolean],
            default: () => {}
        }
    },
    data() {
        return {
            msg: '哈哈哈'
        }
    },
    methods: {
        _renderTable(h) {
            const {data, columns} = this;
            const table = (
                <el-table
                    data={data}
                >
                    {this._renderAllColumns()}
                </el-table>
            )
            return table
        },

        _renderAllColumns() {
            const { columns } = this;
            const colNodes = [];
            colNodes.push(...this._renderColumns(columns));
            return colNodes;
        },

        _renderColumns(columns) {
            return columns.map(column => {
                const {actions=[]} = column;
                if(actions &&  actions.length > 0) {
                    return this._renderActionsColumn(column)
                } else {
                    return this._renderDefaultColumn(column)
                }
                
            })
        },

        // 渲染操作列
        _renderActionsColumn(column) {
            const {actions} = column;
            return (
                <el-table-column
                    {...{props: column}}
                    {...{
                        scopedSlots: {
                            default: ({row, column, $index}) => this._renderButtons(actions, row, column, $index)
                        }
                    }}
                >
                </el-table-column>
            )
        },
       
        // 默认列
        _renderDefaultColumn(column) {
            return (
                <el-table-column
                    {...{
                        props: column
                    }}
                >
                </el-table-column>
            )
        },

        // 操作按钮
        _renderButtons(actions, row, column, index) {
            return actions.map(btn => {
                const {click, ...opt} = btn;
                return <el-button {...{props: opt}} onClick={()=>click(row)}>{btn.text}</el-button>
            })
        },

        // 分页
        _renderPage() {
            const {pagination} = this;
            return (pagination && parseInt(pagination.total) > 0 ? <el-pagination
                {...{props: pagination}}
                {...{
                    on: {
                        'current-change': this._handlePageCurrentChange
                    }
                }}
            >

            </el-pagination> : null);
        },
        _handlePageCurrentChange(currentPage) {
            this.$emit('current-change', currentPage)
        }
    },
    render(h) {
        const table = this._renderTable(h);
        const page = this._renderPage();
        return (
            <div>
                {table}
                <div style={{textAlign: 'right', marginTop: '30px'}}>
                    {page}
                </div>
            </div>
        )
    }
}