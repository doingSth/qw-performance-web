<template>
  <div>
    <lineChartAboutTime title='页面访问量（次）' chartDataName='请求量' :chartData='pvList'>
    </lineChartAboutTime>
    <lineChartAboutTime title='页面总加载时间（毫秒）' chartDataName='加载时间' :chartData='loadList'>
    </lineChartAboutTime>
    <lineChartAboutTime title='白屏时间（毫秒）' chartDataName='白屏时间' :chartData='paintList'>
    </lineChartAboutTime>
    <lineChartAboutTime title='可交互时间（毫秒）' chartDataName='可交互时间' :chartData='interactiveList'>
    </lineChartAboutTime>
    <lineChartAboutTime title='首字节时间（毫秒）' chartDataName='首字节时间' :chartData='ttfbList'>
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
      ttfbList:state => state.page.ttfbList
    })
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
</style>
