/**
 * Created by shen on 2017/1/16.
 */
import request from '../webUtil/request'
import {setPath, getPath} from 'deep-state'
import Vue from 'vue'
var dataToLineChart = function (data) {
  return data && data.map(item => {
    return [item.x, item.y]
  })
}
var now = new Date()
import dateformat from 'dateformat'
module.exports = {
  state: {
    pageList:[
    ],
    keyList:[
    ],
    unitTimeMap: {
      '1H': 60,
      '1D': 24*60,
      '7D': 7*24*60
    },
    query: {
      beginTimeStr: dateformat(now, 'yyyy-mm-dd 00:00:00'),
      endTimeStr: dateformat(now, 'yyyy-mm-dd HH:MM:00'),
      unitTime: '1H'
    },
    activeName: '',
    pvList:[],
    loadList:[],
    interactiveList:[],
    ttfbList:[],
    paintList:[],
    timeList:[]
  },
  mutations: {
    setList (state, payload) {
      Vue.set(state, 'pvList', dataToLineChart(payload.pvList))
      Vue.set(state, 'loadList', dataToLineChart(payload.loadList))
      Vue.set(state, 'interactiveList', dataToLineChart(payload.interactiveList))
      Vue.set(state, 'ttfbList', dataToLineChart(payload.ttfbList))
      Vue.set(state, 'paintList', dataToLineChart(payload.paintList))
    },
    setTimeList (state, payload) {
      Vue.set(state, 'timeList', dataToLineChart(payload.timeList))
    },
    changeValue (state, payload) {
      setPath(state,payload.path,payload.value)
    },
    setUrlList (state, payload) {
      payload = payload&&payload.map(item=>{
        item.id = `${item.id}`
        return item
      })
      state.activeName = payload && `${payload[0].id}`
      console.warn('state.activeName' )
      console.warn(typeof  state.activeName )
      console.warn(state.activeName )
      Vue.set(state, 'pageList', payload)
    },
    setKeyList (state, payload) {
      payload = payload&&payload.map(item=>{
        item.id = `${item.id}`
        return item
      })
      Vue.set(state, 'keyList', payload)
    }
  },
  actions: {
    queryDataDto (context, payload) {
      request.queryDataDto(payload.params).then(json => {
        context.commit('setList', json)
      })
    },
    queryPersonalDataDto (context, payload) {
      request.queryPersonalDataDto(payload.params).then(json => {
        context.commit('setTimeList', json)
      })
    },
    queryUrlList (context, payload) {
      request.queryUrlList().then(json => {
        context.commit('setUrlList', json)
        payload && payload.cb && payload.cb()
      })
    },
    queryKeyList (context, payload) {
      request.queryKeyList().then(json => {
        context.commit('setKeyList', json)
        payload && payload.cb && payload.cb()
      })
    }
  },
  getters: {
  }
}
