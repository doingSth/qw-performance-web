<template>
  <el-tabs v-model="active" type="card">
    <el-tab-pane v-for="tab in list" :label="tab.label || tab.name || tab.url || tab.key" :name="tab.id || tab.name"></el-tab-pane>
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
      'activeName': {},
      'onChange': Function
    },
    watch: {
      'active': function (value) {
        this.onChange(value)
      },
      'activeName': function (v) {
        if(v != this.active){
          this.active = v
        }
      },
      'list': function(v){
      }
    },
    methods: {
    }
  }
</script>
