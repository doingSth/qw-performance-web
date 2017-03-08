<template>
  <div>
    <lineChartAboutTime v-if='showPage' title='页面访问量（次）' chartDataName='请求量' :chartData='pvList'>
    </lineChartAboutTime>
    <lineChartAboutTime v-if='showPage' title='页面总加载时间（毫秒）' chartDataName='加载时间' :chartData='loadList'>
    </lineChartAboutTime>
    <lineChartAboutTime v-if='showPage' title='白屏时间（毫秒）' chartDataName='白屏时间' :chartData='paintList'>
    </lineChartAboutTime>
    <lineChartAboutTime v-if='showPage' title='可交互时间（毫秒）' chartDataName='可交互时间' :chartData='interactiveList'>
    </lineChartAboutTime>
    <lineChartAboutTime v-if='showPage' title='首字节时间（毫秒）' chartDataName='首字节时间' :chartData='ttfbList'>
    </lineChartAboutTime>
    <lineChartAboutTime v-if='!showPage' title='自动上报数据均值' chartDataName='自动上报时间' :chartData='timeList'>
    </lineChartAboutTime>
  </div>

</template>
<script>
import LineChartAboutTime from '../components/LineChartAboutTime.vue'
import { mapState } from 'vuex'
export default {
  name: 'pageList',
  watch: {

  },
  data () {
    var that = this
    return {
      data: [[1488473280000,1]]
    }
  },
  computed: {
    text () {
      return 'text'
    },
    ...mapState({
      pvList:state => state.page.pvList,
      loadList:state => state.page.loadList,
      interactiveList:state => state.page.interactiveList,
      paintList:state => state.page.paintList,
      ttfbList:state => state.page.ttfbList,
      timeList:state => state.page.timeList
    })
  },
  props:['showPage'],
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
</style>
