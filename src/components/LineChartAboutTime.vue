<template>
  <chart class='lineChartAboutTime' :options="polar">
  </chart>
</template>
<script>
import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'
export default {
  name: 'lineChartAboutTime',
  watch: {
  },
  data () {
    var that = this
    return {
      polar: {
          title: {
              text: this.title
          },
          color: ['#20a0ff'],
          tooltip: {},
          legend: {
              data:[this.chartDataName]
          },
          xAxis: {
              'type':'time',
              'splitNumber':7
          },
          yAxis: {
          },
          series: [{
              name: this.chartDataName,
              type: 'line',
              data: this.chartData
          }]
      }
    }
  },
  props: ['title', 'chartDataName', 'chartData'],
  computed: {
  },
  beforeMount () {
  },
  components: {
    chart: ECharts
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .lineChartAboutTime{
    width:100%;
    height: 500px;
  }
</style>
