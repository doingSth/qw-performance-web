<template>
  <div>
    <lineChartAboutTime title='请求量' chartDataName='请求量' :chartData='chartData'>
    </lineChartAboutTime>
  </div>

</template>
<script>
import LineChartAboutTime from '../components/LineChartAboutTime.vue'
export default {
  name: 'pageList',
  watch: {
    '$route.params': function (to, from) {
    }
  },
  data () {
    var that = this
    return {
      chartData:(function () {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 200) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 10000).getTime(),
                        (Math.random()*30).toFixed(2) - 0
                    ]);
                }
                return d;
            })(),
      polar: {
          title: {
              text: '总请求量'
          },
          color: ['#20a0ff'],
          tooltip: {},
          legend: {
              data:['请求量']
          },
          xAxis: {
              'type':'time',
              'splitNumber':7
          },
          yAxis: {
          },
          series: [{
              name: '请求量',
              type: 'line',
              data: (function () {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 200) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 10000).getTime(),
                        (Math.random()*30).toFixed(2) - 0
                    ]);
                }
                return d;
            })()
          }]
      }
    }
  },
  computed: {
  },
  beforeMount () {
  },
  components: {
    lineChartAboutTime: LineChartAboutTime
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../less/base.less";
  .echarts{
    width:100%;
    height: 500px;
  }
</style>
