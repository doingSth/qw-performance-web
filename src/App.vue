<template>
  <el-row class='main'>
    <el-col :span="3">
      <el-menu default-active="2">
        <el-menu-item index="1">总览</el-menu-item>
        <el-menu-item index="2">性能</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <detail/>
    </el-col>
  </el-row>
</template>

<script>
import Detail from './pages/Detail.vue'
export default {
  data () {
    console.warn(this.$route.params)
    var that = this
    return {
    }
  },
  mounted () {

  },
  components: {
    detail: Detail
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
