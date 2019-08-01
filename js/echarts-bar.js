// var scoreImage = document.getElementById('bar1');
// var myChart = echarts.init(scoreImage);

// function test() {
//     myChart.setOption({


//     });
// }
// test();
// $(window).resize(function () { //这是能够让图表自适应的代码
//     myChart.resize();
// });


//  1
var scoreImage = document.getElementById('bar1');
var myChart = echarts.init(scoreImage);

function test() {
    myChart.setOption({
        title: {

            text: '某地区蒸发量和降水量',

            subtext: '纯属虚构',
            textStyle: {
                color:'#666666'
            }

        },


        legend: {

            data: ['蒸发量', '降水量']

        },

        

        calculable: true,

        xAxis: [

            {

                type: 'category',

                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

            }

        ],

        yAxis: [

            {

                type: 'value'

            }

        ],

        series: [

            {

                name: '蒸发量',

                type: 'bar',

                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

                markPoint: {

                    data: [

                        {
                            type: 'max',
                            name: '最大值'
                        },

                        {
                            type: 'min',
                            name: '最小值'
                        }

                    ]

                },

                markLine: {

                    data: [

                        {
                            type: 'average',
                            name: '平均值'
                        }

                    ]

                }

            },

            {

                name: '降水量',

                type: 'bar',

                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],

                markPoint: {

                    data: [

                        {
                            name: '年最高',
                            value: 182.2,
                            xAxis: 7,
                            yAxis: 183,
                            symbolSize: 18
                        },

                        {
                            name: '年最低',
                            value: 2.3,
                            xAxis: 11,
                            yAxis: 3
                        }

                    ]

                },

                markLine: {

                    data: [

                        {
                            type: 'average',
                            name: '平均值'
                        }

                    ]

                }

            }

        ]

    });
}
test();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});



// 2

var scoreImage2 = document.getElementById('bar2');
var myChart = echarts.init(scoreImage2);

function test2() {
    myChart.setOption({
        title: {

            text: '世界人口总量',

            subtext: '数据来自网络',
            textStyle: {
                color:'#666666'
            }

        },

        tooltip: {

            trigger: 'axis'

        },

        legend: {

            data: ['2011年', '2012年']

        },

        

        calculable: true,

        xAxis: [

            {

                type: 'value',

                boundaryGap: [0, 0.01]

            }

        ],

        yAxis: [

            {

                type: 'category',

                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']

            }

        ],

        series: [

            {

                name: '2011年',

                type: 'bar',

                data: [18203, 23489, 29034, 104970, 131744, 630230]

            },

            {

                name: '2012年',

                type: 'bar',

                data: [19325, 23438, 31000, 121594, 134141, 681807]

            }

        ]
    });
}
test2();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 3

var scoreImage3 = document.getElementById('bar3');
var myChart = echarts.init(scoreImage3);

function test3() {
    myChart.setOption({
        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        legend: {

            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']

        },

      
        calculable: true,

        xAxis: [

            {

                type: 'category',

                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

            }

        ],

        yAxis: [

            {

                type: 'value'

            }

        ],

        series: [

            {

                name: '直接访问',

                type: 'bar',

                data: [320, 332, 301, 334, 390, 330, 320]

            },

            {

                name: '邮件营销',

                type: 'bar',

                stack: '广告',

                data: [120, 132, 101, 134, 90, 230, 210]

            },

            {

                name: '联盟广告',

                type: 'bar',

                stack: '广告',

                data: [220, 182, 191, 234, 290, 330, 310]

            },

            {

                name: '视频广告',

                type: 'bar',

                stack: '广告',

                data: [150, 232, 201, 154, 190, 330, 410]

            },

            {

                name: '搜索引擎',

                type: 'bar',

                data: [862, 1018, 964, 1026, 1679, 1600, 1570],

                markLine: {

                    itemStyle: {

                        normal: {

                            lineStyle: {

                                type: 'dashed'

                            }

                        }

                    },

                    data: [

                        [{
                            type: 'min'
                        }, {
                            type: 'max'
                        }]

                    ]

                }

            },

            {

                name: '百度',

                type: 'bar',

                barWidth: 5,

                stack: '搜索引擎',

                data: [620, 732, 701, 734, 1090, 1130, 1120]

            },

            {

                name: '谷歌',

                type: 'bar',

                stack: '搜索引擎',

                data: [120, 132, 101, 134, 290, 230, 220]

            },

            {

                name: '必应',

                type: 'bar',

                stack: '搜索引擎',

                data: [60, 72, 71, 74, 190, 130, 110]

            },

            {

                name: '其他',

                type: 'bar',

                stack: '搜索引擎',

                data: [62, 82, 91, 84, 109, 110, 120]

            }

        ]

    });
}
test3();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 4

var scoreImage4 = document.getElementById('bar4');
var myChart = echarts.init(scoreImage4);

function test4() {
    myChart.setOption({
        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        legend: {

            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']

        },


        calculable: true,

        xAxis: [

            {

                type: 'value'

            }

        ],

        yAxis: [

            {

                type: 'category',

                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

            }

        ],

        series: [

            {

                name: '直接访问',

                type: 'bar',

                stack: '总量',

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                },

                data: [320, 302, 301, 334, 390, 330, 320]

            },

            {

                name: '邮件营销',

                type: 'bar',

                stack: '总量',

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                },

                data: [120, 132, 101, 134, 90, 230, 210]

            },

            {

                name: '联盟广告',

                type: 'bar',

                stack: '总量',

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                },

                data: [220, 182, 191, 234, 290, 330, 310]

            },

            {

                name: '视频广告',

                type: 'bar',

                stack: '总量',

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                },

                data: [150, 212, 201, 154, 190, 330, 410]

            },

            {

                name: '搜索引擎',

                type: 'bar',

                stack: '总量',

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideRight'
                        }
                    }
                },

                data: [820, 832, 901, 934, 1290, 1330, 1320]

            }

        ]

    });
}
test4();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 5


var scoreImage5 = document.getElementById('bar5');
var myChart = echarts.init(scoreImage5);

function test5() {
    myChart.setOption({
        title : {
            text: '双数值柱形图',
            subtext: '纯属虚构',
            textStyle: {
                color:'#666666'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            },
            formatter : function (params) {
                return params.seriesName + ' : [ '
                       + params.value[0] + ', ' 
                       + params.value[1] + ' ]';
            }
        },
        legend: {
            data:['数据1','数据2']
        },
 
        calculable : true,
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#dc143c'
                    }
                }
            }
        ],
        series : [
            {
                name:'数据1',
                type:'bar',
                data:[
                    [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
                ],
                markPoint : {
                    data : [
                        // 纵轴，默认
                        {type : 'max', name: '最大值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'top'}}}},
                        {type : 'min', name: '最小值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'bottom'}}}},
                        // 横轴
                        {type : 'max', name: '最大值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'right'}}}},
                        {type : 'min', name: '最小值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'left'}}}}
                    ]
                },
                markLine : {
                    data : [
                        // 纵轴，默认
                        {type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
                        {type : 'min', name: '最小值', itemStyle:{normal:{color:'#dc143c'}}},
                        {type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}},
                        // 横轴
                        {type : 'max', name: '最大值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
                        {type : 'min', name: '最小值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
                        {type : 'average', name : '平均值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}}
                    ]
                }
            },
            {
                name:'数据2',
                type:'bar',
                barHeight:10,
                data:[
                    [1, 2], [2, 3], [4, 4], [7, 5], [11, 11], [18, 15]
                ]
            }
        ]

    });
}
test5();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 6


var scoreImage6 = document.getElementById('bar6');
var myChart = echarts.init(scoreImage6);

function test6() {
    var labelRight = {normal: {label : {position: 'right'}}};
    myChart.setOption({
        title: {
            text: '交错正负轴标签',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm',
            textStyle: {
                color:'#666666'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {lineStyle:{type:'dashed'}},
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                splitLine: {show: false},
                data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
            }
        ],
        series : [
            {
                name:'生活费',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {
                    color: 'orange',
                    borderRadius: 5,
                    label : {
                        show: true,
                        position: 'left',
                        formatter: '{b}'
                    }
                }},
                data:[
                    {value:-0.07, itemStyle:labelRight},
                    {value:-0.09, itemStyle:labelRight},
                    0.2, 0.44, 
                    {value:-0.23, itemStyle:labelRight},
                    0.08,
                    {value:-0.17, itemStyle:labelRight},
                    0.47,
                    {value:-0.36, itemStyle:labelRight},
                    0.18
                ]
            }
        ]

    });
}
test6();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});

// 7


var scoreImage7 = document.getElementById('bar7');
var myChart = echarts.init(scoreImage7);

function test7() {
    myChart.setOption({
        title: {
            x: 'center',
            text: 'ECharts例子个数统计',
            subtext: 'Rainbow bar example',
            link: 'http://echarts.baidu.com/doc/example.html'
        },
        tooltip: {
            trigger: 'item'
        },

        calculable: true,
        grid: {
            borderWidth: 0,
            y: 80,
            y2: 60
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            {
                name: 'ECharts例子个数统计',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },
                data: [12,21,10,4,12,5,6,5,25,23,7],
                markPoint: {
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(0,0,0,0)',
                        formatter: function(params){
                            return '<img src="' 
                                    + params.data.symbol.replace('image://', '')
                                    + '"/>';
                        }
                    },
                    data: [
                        {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                        {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                        {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                        {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                        {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                        {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                        {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                        {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                        {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                        {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                        {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                    ]
                }
            }
        ]

    });
}
test7();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});