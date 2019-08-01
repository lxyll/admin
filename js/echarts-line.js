// var scoreImage = document.getElementById('line1');
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
var scoreImage = document.getElementById('line1');
var myChart = echarts.init(scoreImage);

function test() {
    myChart.setOption({

        title: {

            text: '未来一周气温变化',

            subtext: '纯属虚构',
            textStyle: {
                color: '#999'
            }

        },

        tooltip: {

            trigger: 'axis'

        },

        legend: {

            data: ['最高气温', '最低气温']

        },

        calculable: true,

        xAxis: [

            {

                type: 'category',

                boundaryGap: false,

                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

            }

        ],

        yAxis: [

            {

                type: 'value',

                axisLabel: {

                    formatter: '{value} °C'

                }

            }

        ],

        series: [

            {

                name: '最高气温',

                type: 'line',

                data: [11, 11, 15, 13, 12, 13, 10],

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

                name: '最低气温',

                type: 'line',

                data: [1, -2, 2, 5, 3, 2, 0],

                markPoint: {

                    data: [

                        {
                            name: '周最低',
                            value: -2,
                            xAxis: 1,
                            yAxis: -1.5
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

var scoreImage2 = document.getElementById('line2');
var myChart = echarts.init(scoreImage2);

function test2() {
    myChart.setOption({
        tooltip: {

            trigger: 'axis'

        },

        legend: {

            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']

        },

        

        calculable: true,

        xAxis: [

            {

                type: 'category',

                boundaryGap: false,

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

                name: '邮件营销',

                type: 'line',

                stack: '总量',

                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },

                data: [120, 132, 101, 134, 90, 230, 210]

            },

            {

                name: '联盟广告',

                type: 'line',

                stack: '总量',

                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },

                data: [220, 182, 191, 234, 290, 330, 310]

            },

            {

                name: '视频广告',

                type: 'line',

                stack: '总量',

                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },

                data: [150, 232, 201, 154, 190, 330, 410]

            },

            {

                name: '直接访问',

                type: 'line',

                stack: '总量',

                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },

                data: [320, 332, 301, 334, 390, 330, 320]

            },

            {

                name: '搜索引擎',

                type: 'line',

                stack: '总量',

                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },

                data: [820, 932, 901, 934, 1290, 1330, 1320]

            }

        ]
    });
}
test2();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 3

var scoreImage3 = document.getElementById('line3');
var myChart = echarts.init(scoreImage3);

function test3() {
    myChart.setOption({
        tooltip: {

            trigger: 'axis'

        },

        legend: {

            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']

        },

        

        calculable: true,

        xAxis: [

            {

                type: 'category',

                boundaryGap: false,

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

                name: '邮件营销',

                type: 'line',

                stack: '总量',

                data: [120, 132, 101, 134, 90, 230, 210]

            },

            {

                name: '联盟广告',

                type: 'line',

                stack: '总量',

                data: [220, 182, 191, 234, 290, 330, 310]

            },

            {

                name: '视频广告',

                type: 'line',

                stack: '总量',

                data: [150, 232, 201, 154, 190, 330, 410]

            },

            {

                name: '直接访问',

                type: 'line',

                stack: '总量',

                data: [320, 332, 301, 334, 390, 330, 320]

            },

            {

                name: '搜索引擎',

                type: 'line',

                stack: '总量',

                data: [820, 932, 901, 934, 1290, 1330, 1320]

            }

        ]

    });
}
test3();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 4

var scoreImage4 = document.getElementById('line4');
var myChart = echarts.init(scoreImage4);

function test4() {
    myChart.setOption({
        title : {

            text: '某楼盘销售情况',
    
            subtext: '纯属虚构',
            textStyle: {
                color: '#999'
            }
    
        },
    
        tooltip : {
    
            trigger: 'axis'
    
        },
    
        legend: {
    
            data:['意向','预购','成交']
    
        },
    
        
    
        calculable : true,
    
        xAxis : [
    
            {
    
                type : 'category',
    
                boundaryGap : false,
    
                data : ['周一','周二','周三','周四','周五','周六','周日']
    
            }
    
        ],
    
        yAxis : [
    
            {
    
                type : 'value'
    
            }
    
        ],
    
        series : [
    
            {
    
                name:'成交',
    
                type:'line',
    
                smooth:true,
    
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
    
                data:[10, 12, 21, 54, 260, 830, 710]
    
            },
    
            {
    
                name:'预购',
    
                type:'line',
    
                smooth:true,
    
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
    
                data:[30, 182, 434, 791, 390, 30, 10]
    
            },
    
            {
    
                name:'意向',
    
                type:'line',
    
                smooth:true,
    
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
    
                data:[1320, 1132, 601, 234, 120, 90, 20]
    
            }
    
        ]

    });
}
test4();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 5


var scoreImage5 = document.getElementById('line5');
var myChart = echarts.init(scoreImage5);

function test5() {
    myChart.setOption({
        title : {

            text : '时间坐标折线图',
    
            subtext : 'dataZoom支持',
            textStyle: {
                color: '#999'
            }
    
        },
    
        tooltip : {
    
            trigger: 'item',
    
            formatter : function (params) {
    
                var date = new Date(params.value[0]);
    
                data = date.getFullYear() + '-'
    
                       + (date.getMonth() + 1) + '-'
    
                       + date.getDate() + ' '
    
                       + date.getHours() + ':'
    
                       + date.getMinutes();
    
                return data + '<br/>'
    
                       + params.value[1] + ', ' 
    
                       + params.value[2];
    
            }
    
        },
    
        
    
        dataZoom: {
    
            show: true,
    
            start : 70
    
        },
    
        legend : {
    
            data : ['series1']
    
        },
    
        grid: {
    
            y2: 80
    
        },
    
        xAxis : [
    
            {
    
                type : 'time',
    
                splitNumber:10
    
            }
    
        ],
    
        yAxis : [
    
            {
    
                type : 'value'
    
            }
    
        ],
    
        series : [
    
            {
    
                name: 'series1',
    
                type: 'line',
    
                showAllSymbol: true,
    
                symbolSize: function (value){
    
                    return Math.round(value[2]/10) + 2;
    
                },
    
                data: (function () {
    
                    var d = [];
    
                    var len = 0;
    
                    var now = new Date();
    
                    var value;
    
                    while (len++ < 200) {
    
                        d.push([
    
                            new Date(2014, 9, 1, 0, len * 10000),
    
                            (Math.random()*30).toFixed(2) - 0,
    
                            (Math.random()*100).toFixed(2) - 0
    
                        ]);
    
                    }
    
                    return d;
    
                })()
    
            }
    
        ]

    });
}
test5();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});


// 6


var scoreImage6 = document.getElementById('line6');
var myChart = echarts.init(scoreImage6);

function test6() {
    myChart.setOption({
        title: {
            text: "对数轴示例",
            x: "center",
            textStyle: {
                color: '#999'
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            x: 'left',
            data: ["2的指数", "3的指数"]
        },
        xAxis: [
            {
                type: "category",
                name: "x",
                splitLine: {show: false},
                data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
            }
        ],
        yAxis: [
            {
                type: "log",
                name: "y"
            }
        ],
         
        calculable: true,
        series: [
            {
                name: "3的指数",
                type: "line",
                data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
     
            },
            {
                name: "2的指数",
                type: "line",
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
     
            }
        ]

    });
}
test6();
$(window).resize(function () { //这是能够让图表自适应的代码
    myChart.resize();
});