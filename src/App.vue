<template>
  <div>
    <tabs :list='pageList' :activeName='activePageIndex' :onChange='(val)=>this.changeValue("activePageIndex",val)'/>
    <search/>
    <el-row class='main'>
      <el-col :span="24">
        <detail/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './pages/Detail.vue'
import Tabs from './components/Tabs.vue'
import Search from './components/Search.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  beforeMount () {
    this.query()
  },
  mounted () {
  },
  computed: {
    text () {
      return 'text'
    },
    ...mapState({
      pageList:state => state.page.pageList,
      activePageIndex:state => state.page.activePageIndex,
      beginTimeStr: state => state.page.query.beginTimeStr,
      endTimeStr: state => state.page.query.endTimeStr,
      unitTime: state => state.page.query.unitTime
    })
  },
  watch: {
    'activePageIndex': function (to, from) {
      if (to !== from) {
        this.query()
      }
    },
    'beginTimeStr': function () {
      this.query()
    },
    'endTimeStr': function () {
      this.query()
    },
    'unitTime': function () {
      this.query()
    },
  },
  components: {
    detail: Detail,
    search: Search,
    tabs: Tabs
  },
  methods: {
    query () {
      var pageList = this.$store.state.page.pageList
      var activePageIndex = this.$store.state.page.activePageIndex
      var unitTimeMap = this.$store.state.page.unitTimeMap
      var queryObj = this.$store.state.page.query
      var app = pageList[activePageIndex].app
      var params = {
        app: app,
        beginTimeStr: queryObj.beginTimeStr,
        endTimeStr: queryObj.endTimeStr,
        unitTimeAboutMinutes: unitTimeMap[queryObj.unitTime]
      }
      this.$store.dispatch('queryDataDto',{
        params: params
      })
    },
    changeValue (path, val) {
      this.$store.commit('changeValue', {
        'path': path,
        'value': val
      })
    }
  }
}
</script>

<style lang="less">
</style>
