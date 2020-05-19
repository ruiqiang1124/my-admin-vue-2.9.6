<template>
    <div :id="id" :style="{width: width, height: height}"></div>
</template>

<script>
import echarts from 'echarts';
let option = function(color) {
    return {
        color: color,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
            axisPointer :{
                label:{
                    formatter: function (params) {
                        console.log(params);
                        // 假设此轴的 type 为 'time'。
                        return 'some text';
                    }
                },
            },
        },
        legend: {
            data:[  { name:'今日' },{ name:'昨日' }  ],
            right:'0'
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    onZero: false,
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '今天'+params.value+'点';
                        }
                    }
                },
                data: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            },
            {
                type: 'category',
                axisLine: {
                    onZero: false,
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '昨天'+params.value+'点';
                        }
                    }
                },
                data: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
                show:false,
            }
        ],
        grid: {
            top: 70,
            bottom: 20
        },
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: [
            {
                name:'今日',
                type:'line',
                xAxisIndex: 1,
                smooth: true,
                symbol:'circle',
                showSymbol:false,
                data: [],
                label:{
                    show:true,
                    formatter: '今日 {c}',
                    color:'#fff',
                    padding: [3,7],
                    borderRadius:3,
                    backgroundColor:'rgba(0,0,0,0.8)',
                },
            },
            {
                name:'昨日',
                type:'line',
                smooth:false,   //关键点，为true是不支持虚线的，实线就用true
                itemStyle:{
                    normal:{
                        color:color,
                        lineStyle:{
                            width:2,
                            type:'dashed',  //'dotted'虚线 'solid'实线
                            color:color,
                        }
                    }
                },
                showSymbol:false,
                smooth: true,
                label:{
                    show:true,
                    formatter: '昨日 {c}',
                    color:'#fff',
                    padding: [3,7],
                    borderRadius:3,
                    backgroundColor:'rgba(0,0,0,0.8)',
                },
            }
        ]
    }
}
export default {
    props: {
        id: {
            type: String,
            default: 'echart'
        },
        width: {
            type: String,
            default: '200px'
        },
        height: {
            type: String,
            default: '200px'
        },
        ThemeColor: {
            type: String,
            default: '#1f75e7'
        },
        chartData: {
            type: Object,
            default: {
                title: {
                    text: '统计'
                },
                todayArr: [], // 今日数据
                yesterdayArr: [] // 昨日数据
            }
        }
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        console.log(this);
        
        this.initEcharts();
    },
    methods: {
        initEcharts() {
            let options = option(this.ThemeColor);
            let NewchartData = Object.assign(options, this.chartData)
            options.series[0].data = this.chartData.todayArr;
            options.series[1].data = this.chartData.yesterdayArr;
            this.chart = echarts.init(document.getElementById(this.id));
            this.chart.setOption(NewchartData);
        }
    }
}
</script>

<style>

</style>