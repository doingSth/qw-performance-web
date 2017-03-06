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
    activePageIndex: '0',
    pvList:[],
    loadList:[],
    interactiveList:[],
    ttfbList:[],
    paintList:[]
  },
  mutations: {
    setList (state, payload) {
      Vue.set(state, 'pvList', dataToLineChart(payload.pvList))
      Vue.set(state, 'loadList', dataToLineChart(payload.loadList))
      Vue.set(state, 'interactiveList', dataToLineChart(payload.interactiveList))
      Vue.set(state, 'ttfbList', dataToLineChart(payload.ttfbList))
      Vue.set(state, 'paintList', dataToLineChart(payload.paintList))
      console.warn(JSON.stringify(state.pvList))
    },
    changeValue (state, payload) {
      setPath(state,payload.path,payload.value)
    },
    setUrlList (state, payload) {
      Vue.set(state, 'pageList', payload)
    }
  },
  actions: {
    queryDataDto (context, payload) {
      request.queryDataDto(payload.params).then(json => {
        context.commit('setList', json)
      })
    },
    queryUrlList (context, payload) {
      request.queryUrlList().then(json => {
        context.commit('setUrlList', json)
        payload.cb && payload.cb()
      })
    }
  },
  getters: {
  }
}
