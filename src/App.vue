<template>
  <div>
    <el-row >
      <el-col :span="21">
        <tabs :list='pageList' :activeName='activeName' :onChange='(val)=>this.changeValue("activeName",val)'/>
      </el-col>
      <el-col :span="3">
        <el-switch
          class='switchClass'
          :width='85'
          v-model="showPage"
          on-color="#20a0ff"
          off-color="#13ce66"
          on-text="主动上报"
          off-text="自动采集">
        </el-switch>
      </el-col>
    </el-row>
    <search/>
    <el-row class='main'>
      <el-col :span="24">
        <detail :showPage='showPage'/>
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
      showPage: true
    }
  },
  beforeMount () {
    var that = this
    this.$store.dispatch('queryUrlList', {
      cb: () =>{
        //that.query()
      }
    })
    this.$store.dispatch('queryKeyList')
  },
  mounted () {
  },
  computed: {
    text () {
      return 'text'
    },
    pageList() {
      if(this.showPage) {
        return this.$store.state.page.pageList
      } else {
        return this.$store.state.page.keyList
      }
    },
    ...mapState({
      activeName:state => `${state.page.activeName}`,
      beginTimeStr: state => state.page.query.beginTimeStr,
      endTimeStr: state => state.page.query.endTimeStr,
      unitTime: state => state.page.query.unitTime
    })
  },
  watch: {
    'activeName': function (to, from) {
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
    'showPage': function () {
      var pageList = this.$store.state.page.pageList
      var keyList = this.$store.state.page.keyList
      if(this.showPage) {
        this.changeValue("activeName",pageList && pageList[0] && pageList[0].id)
      } else {
        this.changeValue("activeName",keyList && keyList[0] && keyList[0].id)
      }
      this.query()
    }
  },
  components: {
    detail: Detail,
    search: Search,
    tabs: Tabs
  },
  methods: {
    query () {
      var unitTimeMap = this.$store.state.page.unitTimeMap
      var activeName = this.$store.state.page.activeName
      var queryObj = this.$store.state.page.query
      var params = {
        urlId: activeName,
        keyId: activeName,
        beginTimeStr: queryObj.beginTimeStr,
        endTimeStr: queryObj.endTimeStr,
        unitTimeAboutMinutes: unitTimeMap[queryObj.unitTime]
      }
      var action = 'queryDataDto'
      if(!this.showPage){
        action='queryPersonalDataDto'
      }
      this.$store.dispatch(action,{
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
  .switchClass{
    margin-top: 10px;
    margin-right: 20px;
    float: right;
  }
</style>
