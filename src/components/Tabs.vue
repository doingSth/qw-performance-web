<template>
  <el-tabs v-model="active" type="card">
    <el-tab-pane v-for="tab in list" :label="tab.label" :name="tab.name"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data () {
      return {
        active: this.activeName
      }
    },
    props: {
      'list': Array,
      'activeName': String,
      'onChange': Function
    },
    watch: {
      'active': function (value) {
        this.onChange(value)
      },
      'activeName': function (v) {
        this.active = v
      }
    },
    methods: {
    }
  }
</script>
