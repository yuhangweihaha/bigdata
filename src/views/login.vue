<template>
  <div id="login">
    <!--<img :src="img" alt="">-->
    <header>
      <div class="headersize"><img src="../icon/pic_size.png" alt=""></div>
    </header>
    <div class="Leftlogin">
      <div class="Leftloginone" ref="Leftloginone"></div>
      <div class="Leftlogintwo" ref="Leftlogintwo"></div>
      <div class="Leftloginthree"></div>
    </div>
    <div class="Contentlogin">
      <div class="Contentlogintop">
        <div id="allmap" ref="allmap"></div>
        <!--<canvas id="canvas"></canvas>
        <div id="time"></div>-->
        <div class="Transformation"></div>
        <div class="Deduction"></div>
      </div>
      <div class="Contentloginbottom" ref="Contentloginbottom"></div>

    </div>
    <div class="Rightlogin">
      <div class="Rightloginone"  ref="Rightloginoe"></div>
      <div class="Rightlogintwo" ref="Rightlogintwo"></div>
      <div class="Rightloginthree" ref="Rightloginthree"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import 'echarts/map/js/china.js' // 引入中国地图数据
  // import { initOption as ioption } from 'liquidfillOptions.js'
  export default {
    name: '',
    data() {
      return {
        img: require('@/icon/pic_map.png'),
        opt: ioption,
        map: '',
      }
    },

    methods: {
      auto() {
        this.map = new BMap.Map(this.$refs.allmap, {
          enableMapClick: false
        });
        this.map.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5);  // 初始化地图,设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        this.map.setMapStyle({
          styleJson: [{
            "featureType": "water",
            "elementType": "all",
            "stylers": {
              "color": "#044161"
            }
          }, {
            "featureType": "land",
            "elementType": "all",
            "stylers": {
              "color": "#091934"
            }
          }, {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
              "color": "#064f85"
            }
          }, {
            "featureType": "railway",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
              "color": "#004981",
              "lightness": -39
            }
          }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#00508b"
            }
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
              "color": "#056197",
              "visibility": "off"
            }
          }, {
            "featureType": "subway",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "local",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "boundary",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#029fd4"
            }
          }, {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
              "color": "#1a5787"
            }
          }, {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": {
              "color": "#ffffff"
            }
          }, {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": {
              "color": "#1e1c1c"
            }
          }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": {
              "visibility": "on"
            }
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          }]
        });
      },
      hold() {
  /*      /!*this.$http.get('examples/data/weibo.json',{

        }).then(res => {
          console.log(res,'resres')
        })*!/
        this.$http.get('holecoverServer/alarm', {})
          .then(res => {
            if (res.status === 200 || res.status === '200') {
              let assig = res.data.rows;
              console.log(res.data, 'resres');
            } else {
              alert('接口错误')
            }
            // this.yuyu = res.Secondcover;

          });*/
      },
      autos(){
        let brr = echarts.init(this.$refs.Rightloginoe);
      /*  let option = {
          title : {
            text: '访问 vs 咨询',
            subtext: '各个数据的集合'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{b}: {c}"
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : false,
          series : [
            {
              name:'韦恩图',
              type:'venn',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    textStyle: {
                      fontFamily: 'Arial, Verdana, sans-serif',
                      fontSize: 16,
                      fontStyle: 'italic',
                      fontWeight: 'bolder'
                    }
                  },
                  labelLine: {
                    show: false,
                    length: 10,
                    lineStyle: {
                      // color: 各异,
                      width: 1,
                      type: 'solid'
                    }
                  }
                },
                emphasis: {
                  color: '#cc99cc',
                  borderWidth: 3,
                  borderColor: '#996699'
                }
              },
              data:[
                {value:100, name:'访问'},
                {value:50, name:'咨询'},
                {value:20, name:'公共'}
              ]
            }
          ]
        };*/
        // Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        let dataBJ = [
          [55,9,56,0.46,18,6,1],
          [25,11,21,0.65,34,9,2],
          [56,7,63,0.3,14,5,3],
          [33,7,29,0.33,16,6,4],
          [42,24,44,0.76,40,16,5],
          [82,58,90,1.77,68,33,6],
          [74,49,77,1.46,48,27,7],
          [78,55,80,1.29,59,29,8],
          [267,216,280,4.8,108,64,9],
          [185,127,216,2.52,61,27,10],
          [39,19,38,0.57,31,15,11],
          [41,11,40,0.43,21,7,12],
          [64,38,74,1.04,46,22,13],
          [108,79,120,1.7,75,41,14],
          [108,63,116,1.48,44,26,15],
          [33,6,29,0.34,13,5,16],
          [94,66,110,1.54,62,31,17],
          [186,142,192,3.88,93,79,18],
          [57,31,54,0.96,32,14,19],
          [22,8,17,0.48,23,10,20],
          [39,15,36,0.61,29,13,21],
          [94,69,114,2.08,73,39,22],
          [99,73,110,2.43,76,48,23],
          [31,12,30,0.5,32,16,24],
          [42,27,43,1,53,22,25],
          [154,117,157,3.05,92,58,26],
          [234,185,230,4.09,123,69,27],
          [160,120,186,2.77,91,50,28],
          [134,96,165,2.76,83,41,29],
          [52,24,60,1.03,50,21,30],
          [46,5,49,0.28,10,6,31]
        ];

        let dataGZ = [
          [26,37,27,1.163,27,13,1],
          [85,62,71,1.195,60,8,2],
          [78,38,74,1.363,37,7,3],
          [21,21,36,0.634,40,9,4],
          [41,42,46,0.915,81,13,5],
          [56,52,69,1.067,92,16,6],
          [64,30,28,0.924,51,2,7],
          [55,48,74,1.236,75,26,8],
          [76,85,113,1.237,114,27,9],
          [91,81,104,1.041,56,40,10],
          [84,39,60,0.964,25,11,11],
          [64,51,101,0.862,58,23,12],
          [70,69,120,1.198,65,36,13],
          [77,105,178,2.549,64,16,14],
          [109,68,87,0.996,74,29,15],
          [73,68,97,0.905,51,34,16],
          [54,27,47,0.592,53,12,17],
          [51,61,97,0.811,65,19,18],
          [91,71,121,1.374,43,18,19],
          [73,102,182,2.787,44,19,20],
          [73,50,76,0.717,31,20,21],
          [84,94,140,2.238,68,18,22],
          [93,77,104,1.165,53,7,23],
          [99,130,227,3.97,55,15,24],
          [146,84,139,1.094,40,17,25],
          [113,108,137,1.481,48,15,26],
          [81,48,62,1.619,26,3,27],
          [56,48,68,1.336,37,9,28],
          [82,92,174,3.29,0,13,29],
          [106,116,188,3.628,101,16,30],
          [118,50,0,1.383,76,11,31]
        ];

        let dataSH = [
          [91,45,125,0.82,34,23,1],
          [65,27,78,0.86,45,29,2],
          [83,60,84,1.09,73,27,3],
          [109,81,121,1.28,68,51,4],
          [106,77,114,1.07,55,51,5],
          [109,81,121,1.28,68,51,6],
          [106,77,114,1.07,55,51,7],
          [89,65,78,0.86,51,26,8],
          [53,33,47,0.64,50,17,9],
          [80,55,80,1.01,75,24,10],
          [117,81,124,1.03,45,24,11],
          [99,71,142,1.1,62,42,12],
          [95,69,130,1.28,74,50,13],
          [116,87,131,1.47,84,40,14],
          [108,80,121,1.3,85,37,15],
          [134,83,167,1.16,57,43,16],
          [79,43,107,1.05,59,37,17],
          [71,46,89,0.86,64,25,18],
          [97,71,113,1.17,88,31,19],
          [84,57,91,0.85,55,31,20],
          [87,63,101,0.9,56,41,21],
          [104,77,119,1.09,73,48,22],
          [87,62,100,1,72,28,23],
          [168,128,172,1.49,97,56,24],
          [65,45,51,0.74,39,17,25],
          [39,24,38,0.61,47,17,26],
          [39,24,39,0.59,50,19,27],
          [93,68,96,1.05,79,29,28],
          [188,143,197,1.66,99,51,29],
          [174,131,174,1.55,108,50,30],
          [187,143,201,1.39,89,53,31]
        ];

        let lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        let option = {
          legend: {
            bottom: 5,
            data: ['北京', '上海', '广州'],
            itemGap: 20,
            textStyle: {
              color: '#fff',
              fontSize: 14
            },
            selectedMode: 'single'
          },
          // visualMap: {
          //     show: true,
          //     min: 0,
          //     max: 20,
          //     dimension: 6,
          //     inRange: {
          //         colorLightness: [0.5, 0.8]
          //     }
          // },
          radar: {
            indicator: [
              {name: 'AQI', max: 300},
              {name: 'PM2.5', max: 250},
              {name: 'PM10', max: 300},
              {name: 'CO', max: 5},
              {name: 'NO2', max: 200},
              {name: 'SO2', max: 100}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
              textStyle: {
                color: 'rgb(238, 197, 102)'
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                  'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
              }
            }
          },
          series: [
            {
              name: '北京',
              type: 'radar',
              lineStyle: lineStyle,
              data: dataBJ,
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: '#F9713C'
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.1
                }
              }
            },
            {
              name: '上海',
              type: 'radar',
              lineStyle: lineStyle,
              data: dataSH,
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: '#B3E4A1'
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: '广州',
              type: 'radar',
              lineStyle: lineStyle,
              data: dataGZ,
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: 'rgb(238, 197, 102)'
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            }
          ]
        };
        brr.setOption(option);
      },
      Typeratio(){
        let brr = echarts.init(this.$refs.Leftloginone);
        let sourceBar = {
          "itemData": ["井盖", "路灯", "压力", "视频", "雨量计", "液位表"],
          "seriesData": [400, 302, 250, 157, 231, 300]
        };
        let itemData = sourceBar.itemData;
        let seriesData = sourceBar.seriesData;
        let tooltip = sourceBar.tooltip;
        let color = ['#00b9f6', '#38a97d', '#004eff', '#17c7e7', '#4e85ea', '#e49be9', '#078d9d', '#eca52a', '#ef9544', '#ea3b3b']

        let data = {};
        for (let k in itemData) {
          data[itemData[k]] = seriesData[k];
        }

        let xAxisData = [];
        let dataArr = [];
        for (let i in data) {
          xAxisData.push(i);
          dataArr.push(data[i]);
        }

        let option = {
          grid: {
            top: '25%',
            left: '5%',
            right: '10%',
            bottom: '8%',
            containLabel: true
          },
          tooltip: {
            show: "true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                color: 'rgba(112,112,112,0)',
              },
            },
            formatter: function(params) {
              let unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
              return params[0].name + '：' + params[0].value + '条数据';
            },
            // backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
          },
          xAxis: [{
            show: true,
            name: '来源',
            nameTextStyle: {
              fontSize: 14,
              fontFamily: 'Microsoft YaHei',
              color: '#fff'
            },
            type: 'category',
            nameLocation: 'end',
            nameGap: 8,
            axisLabel: {
              fontSize: 16,
              fontFamily: 'Microsoft YaHei',
              color: "#fff",
              interval: 0,
              margin: 16,
              formatter: function(params) {
                if (params.length > 6) {
                  params = params.substr(0, 6) + "...";
                } else {
                  params = params;

                }
                return params;
              }
            },
            axisLine: {
              show: true,
              symbol: ['none', 'arrow'],
              lineStyle: {
                color: '#05edfc'
              }
            },
            data: xAxisData
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: xAxisData
          }, {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: xAxisData
          }],
          yAxis: {
            type: 'value',
            name: '数量',
            nameTextStyle: {
              fontSize: 12,
              fontFamily: 'Microsoft YaHei',
              color: '#fff'
            },
            minInterval: 1,
            nameLocation: 'end',
            nameGap: 10,
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              fontSize: 12,
              fontFamily: 'Arial',
              color: "#fff"
            },
            axisLine: {
              show: true,
              symbol: ['none', 'arrow'],
              lineStyle: {
                color: '#05edfc'
              }
            }
          },
          series: [{
            type: 'bar',
            stack: 1,
            xAxisIndex: 0,
            barWidth: 10,
            barGap: 5,
            z: 2,
            data: function() {
              let itemArr = [];
              for (let i = 1; i < (dataArr.length + 1); i++) {
                let item = {
                  value: dataArr[i - 1],
                  itemStyle: {
                    normal: {
                      barBorderRadius: 50,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color[translateColor(i) * 2 - 2]
                      }, {
                        offset: 1,
                        color: color[translateColor(i) * 2 - 1]
                      }]),
                    }
                  }
                };
                itemArr.push(item);
              }
              return itemArr;
            }()
          },
            {
              type: 'scatter',
              stack: 1,
              symbolOffset: [0, 0], //相对于原本位置的偏移量
              label: {
                normal: {
                  show: false,
                }
              },
              xAxisIndex: 2,
              symbolSize: 10,
              z: 2,
              data: function() {
                let itemArr = [];
                for (let i = 1; i < (dataArr.length + 1); i++) {
                  let item = {
                    value: 0,
                    itemStyle: {
                      normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: color[translateColor(i) * 2 - 2]
                        }, {
                          offset: 1,
                          color: color[translateColor(i) * 2 - 1]
                        }]),
                      }
                    }
                  };
                  itemArr.push(item);
                }
                return itemArr;
              }()
            },
            {
              type: 'bar',
              xAxisIndex: 1,
              barGap: '140%',
              data: dataArr,
              barWidth: 22,
              itemStyle: {
                normal: {
                  barBorderRadius: 50,
                  color: '#0e2147'
                }
              },
              z: 1
            },
            {
              type: 'bar',
              xAxisIndex: 2,
              barWidth: 25,
              barGap: 1,
              z: 0,
              data: function() {
                let itemArr = [];
                for (let i = 1; i < (dataArr.length + 1); i++) {
                  let item = {
                    value: dataArr[i - 1],
                    itemStyle: {
                      normal: {
                        barBorderRadius: 50,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: color[translateColor(i) * 2 - 2]
                        }, {
                          offset: 1,
                          color: color[translateColor(i) * 2 - 1]
                        }]),
                      }
                    }
                  };
                  itemArr.push(item);
                }
                return itemArr;
              }()
            },
            {
              type: 'scatter',
              hoverAnimation: false,
              xAxisIndex: 2,
              symbolOffset: [0, 0], //相对于原本位置的偏移量
              symbolSize: 18,
              z: 2,
              data: function() {
                let itemArr = [];
                for (let i = 1; i < (dataArr.length + 1); i++) {
                  let item = {
                    value: 0,
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: color[translateColor(i) * 2 - 2]
                        }, {
                          offset: 1,
                          color: color[translateColor(i) * 2 - 1]
                        }]),
                      }
                    }
                  };
                  itemArr.push(item);
                }
                return itemArr;
              }()
            }
          ]
        };

        function translateColor(index) {
          if (index > 5) {
            return translateColor(index - 5)
          }
          return index
        }
        brr.setOption(option);
      },
      Thermodynamic(){
        let brr = echarts.init(this.$refs.Leftlogintwo);
        // 数据格式 [经度，纬度]
        let heatData = [[116.11,39.852],
          [116.21,39.952],
          [116.31,39.957],
          [116.41,39.959],
        ];

        let option = {
          color: ['red','yellow','#d8e050'],
          tooltip : {
            trigger: 'item',
            formatter: '{b}'
          },
          series : [
            {
              name: '妥投量',
              type: 'map',
              mapType: '北京',
              roam: false,
              mapLocation:{x:'center',y:'2%'},
              itemStyle:{
                normal:{
                  label:{
                    show:true,
                    textStyle:{
                      fontSize : '12',
                      fontFamily:'Microsoft YaHei',
                      color:'#00ffff'
                    }
                  },
                  borderColor:'#5ef9f7',
                  borderWidth:1,
                  areaStyle:{
                    color: '#210874'
                  }
                }
              },
              data:[],
              heatmap: {
                minAlpha: 0.5,
                data: heatData
              },
            }
          ]
        };
        brr.setOption(option);
      },
      Analysis(){
        let brr = echarts.init(this.$refs.Contentloginbottom);

        let option = {
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          legend: {
            data:['邮件营销','联盟广告']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],

            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},


          ]
        };
        brr.setOption(option);
      },
      statistics(){
        let brr = echarts.init(this.$refs.Rightlogintwo);
        let option = {
          tooltip: {
          },
          grid: {
            top: '8%',
            left: '1%',
            right: '1%',
            bottom: '8%',
            containLabel: true,
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233e64'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#6a9cd5',
                margin:15,
              },
            },
            axisTick: { show: false,},
            data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            max:140,
            splitNumber: 7,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#233e64'
              }
            },
            axisLine: {show: false,},
            axisLabel: {
              margin:20,
              textStyle: {
                color: '#6a9cd5',

              },
            },
            axisTick: { show: false,},
          }],
          series: [{
            name: '异常流量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize:0,

            lineStyle: {
              normal: {
                color: "#3deaff"   // 线条颜色
              }
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
                  { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
                ], false),

                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [40, 130, 30, 105, 40, 110, 70]
          }]
        };
        brr.setOption(option);
      },
      Wave(){
        let brr = echarts.init(this.$refs.Rightloginthree);
        let option = {
          series: [{
            type: 'liquidFill',
            data: [0.7],
            label:{
              normal:{
                textStyle:{
                  fontSize:10
                }
              }
            },
          }]
        };
        brr.setOption(option);
      }
    },
    mounted() {
      this.auto();
      this.hold();
      this.autos();
      this.Typeratio();
      this.Thermodynamic();
      this.Analysis();
      this.statistics();
      this.Wave();
    }
  }


</script>

<style lang="less" scoped>
  #login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('../icon/pic_map.png');
    background-repeat: repeat-y;
    background-size: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  header {
    width: 100%;
    height: 82px;
    background-image: url('../icon/pic_header.png');
    background-repeat: repeat-y;
    background-size: 100% 99%;
    color: #fff;
    font-size: 41px;
    text-align: center;
    line-height: 80px;
    /*font-weight: 700;*/
    /*position: absolut*/
    /*background: darkcyan;*/;
    .headersize {
      width: 30%;
      height: 64%;
      padding-top: 12px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .Leftlogin {
    width: 24%;
    height: 100%;
    margin-top: -13px;
    float: left;
    margin-left: 1%;
    .Leftloginone {
      width: 100%;
      height: 31%;
      background-image: url('../icon/leftback.png');
      background-repeat: no-repeat;
      background-size: 100%;
      /*background: bisque;*/
    }
    .Leftlogintwo {
      width: 100%;
      height: 32%;
      background-image: url('../icon/leftback.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .Leftloginthree {
      width: 100%;
      height: 31%;
      background-image: url('../icon/leftback.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  #allmap {
    height: 100%;
    overflow: hidden;
  }

  .Contentlogin {
    width: 47%;
    height: 100%;
    float: left;
    opacity: 0.6;
    margin-left: 1.5%;
    .Contentlogintop {
      width: 100%;
      /*margin-left: 5%;*/
      margin-top: 2%;
      height: 52%;
      z-index: 100;
      position: relative;
      .Transformation {
        position: absolute;
        right: 7%;
        bottom: 14%;
        width: 42px;
        height: 42px;
        cursor: pointer;
        background-image: url('../icon/Backgbox.png');
        background-repeat: no-repeat;
        background-size: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .Deduction {
        position: absolute;
        right: 7%;
        bottom: 4%;
        width: 42px;
        height: 42px;
        cursor: pointer;
        background-image: url('../icon/Backgbox.png');
        background-repeat: no-repeat ;
        background-size: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .Contentloginbottom {
      width: 100%;
      height: 40%;
      /*background: gold;*/
      background-image: url('../icon/pic_bottom.png');
      background-repeat: no-repeat;
      background-size: 100% 84%;
      margin-top: 29px;
    }
  }

  .Rightlogin {
    width: 24%;
    height: 100%;
    margin-top: -13px;
    margin-right: 1%;
    float: right;
    .Rightloginone {
      width: 100%;
      height: 31%;
      background-image: url('../icon/rightback.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .Rightlogintwo {
      width: 100%;
      height: 32%;
      background-image: url('../icon/rightback.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .Rightloginthree {
      width: 100%;
      height: 31%;
      background-image: url('../icon/rightback.png');
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  /*  @media (min-width: 1360px){
      .LoginSignIn {
        width: 450px;
        height: 286px;
        position: absolute;
        bottom: 22.5%;
        left: 33%;
        .check{
          width: 80px;
          height: 20px;
          position: absolute;
          right: 65%;
          bottom: 1%;
        }
      }
    }*/

</style>
<style>

</style>



