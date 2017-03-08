<template>
  <el-row class="block" :style='{"line-height":"40px"}'>
    <el-col :span='2' class="label">
      时间区间:
    </el-col>
    <el-col :span='10'>
      <el-date-picker
        v-model="dateTimeRange"
        type="datetimerange"
        :picker-options="pickerOptions2"
        placeholder="选择时间范围">
      </el-date-picker>
    </el-col>
    <el-col :span='2' class="label">
      时间粒度:
    </el-col>
    <el-col :span='8'>
      <el-radio-group v-model="unitTime">
        <el-radio-button label="1H">
        </el-radio-button>
        <el-radio-button label="1D">
        </el-radio-button>
        <el-radio-button label="7D">
        </el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
</template>
<script>
  import { mapState } from 'vuex'
  import dateformat from 'dateformat'
  export default {
    data () {
      var query = this.$store.state.page.query
      return {
        pickerOptions2: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        dateTimeRange: [new Date(query.beginTimeStr).getTime(),new Date(query.endTimeStr).getTime()],
        unitTime: query.unitTime
      }
    },
    computed: {
      text () {
        return 'text'
      }
    },
    props: {
    },
    watch: {
      'dateTimeRange': function (v) {
        var beginStr = this.$store.state.page.query.beginTimeStr
        var endStr = this.$store.state.page.query.endTimeStr
        var newBeginStr = dateformat(v[0],'yyyy-mm-dd HH:MM:ss')
        var newEndStr = dateformat(v[1],'yyyy-mm-dd HH:MM:ss')
        if(beginStr != newBeginStr) {
          this.changeValue('query.beginTimeStr', newBeginStr)
        }
        if (endStr != newEndStr) {
          this.changeValue('query.endTimeStr', newEndStr)
        }
      },
      'unitTime': function (v) {
        var unitTime = this.$store.state.page.query.unitTime
        if(unitTime != v) {
          this.changeValue('query.unitTime', v)
        }
      }
    },
    methods: {
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
  .label{
    margin-left: 10px;
    font-size: 15px;
    color: #00A000;
  }
</style>
