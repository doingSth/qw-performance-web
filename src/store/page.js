/**
 * Created by shen on 2017/1/16.
 */
import request from '../webUtil/request'
import {setPath, getPath} from 'deep-state'
import Vue from 'vue'
module.exports = {
  state: {
    'config': [],
    'optList': [], // 纪录需要保存时执行的操作
    'cmpList': [],
    'pagePlatform': undefined,
    'topicId': undefined,
    'selectIndex': -1,
    'previewWindow': undefined,
    'share': {},
    'query': {
      'name': undefined,
      'publishStatus': undefined,
      'status': undefined,
      'login': undefined
    },
    'pageList': [],
    'pageInfo': {
      'pageIndex': 1,
      'count': 0,
      'pageSize': 10
    },
    'pageDetail': {}
  },
  mutations: {
    initOptList (state, payload) {
      state.optList = []
    },
    setPageDetail (state, payload) {
      state.pageDetail = Object.assign(ObjectFactory.emptyPageDetail(), payload)
      state.share = Object.assign(ObjectFactory.emptyShare(), JSON.parse(payload.share || '{}'))
    },
    setPageTopicId (state, payload) {
      state.topicId = payload
    },
    setPagePlatform (state, payload) {
      state.pagePlatform = payload
    },
    setCmpList (state, payload) {
      state.cmpList = payload ? payload.split(',') : []
    },
    setPageConfig (state, payload) {
      var list = JSON.parse(payload || '[]')
      if (list && list.length > 0) {
        Vue.set(state, 'config', list)
        Vue.set(state, 'selectIndex', 0)
      } else {
        state.config = []
        state.selectIndex = -1
      }
    },
    changeConfig (state, payload) {
      console.warn(payload)
      Vue.set(state.config[payload.objPath.split('.')[0]], 'showDefault', false)
      var obj = getPath(state.config, payload.objPath) || {}
      Vue.set(obj, payload.key, payload.value)
    },
    changeConfigDeleteList (state, payload) {
      var obj = getPath(state.config, `${payload.path}`) || {}
      obj.list.splice(payload.index, 1)
    },
    changeConfigAddList (state, payload) {
      var obj = getPath(state.config, `${payload.path}`) || {}
      var items = getPath(state.config, `${payload.path}.items`) || {}
      var newItems = JSON.parse(JSON.stringify(items))
      if (!obj.list || obj.list.length < 1) {
        Vue.set(obj, 'list', [newItems])
      } else {
        obj.list.splice(payload.index, 0, newItems)
      }
    },
    dragModel (state, payload) {
      let cmpIndex = parseInt(payload[0])
      let index = parseInt(payload[1])
      var obj = JSON.parse(JSON.stringify(state.config[cmpIndex]))
      var cmp = state.cmpList[cmpIndex]
      state.config.splice(cmpIndex, 1)
      state.config.splice(index, 0, obj)
      state.cmpList.splice(cmpIndex, 1)
      state.cmpList.splice(index, 0, cmp)
      state.selectIndex = parseInt(index)
    },
    addModel (state, payload) {
      console.warn('add')
      console.warn(state.selectIndex)
      state.config.splice(++state.selectIndex, 0, payload.config)
      state.cmpList.splice(state.selectIndex, 0, payload.uniqueKey)
      console.warn(state.selectIndex)
      console.warn(JSON.stringify(state.config))
    },
    deleteModel (state, payload) {
      var optList = ConfigJSON.getOptListAboutDeleteList([state.config[payload]])
      optList = optList.concat(JSON.parse(JSON.stringify(state.optList)))
      console.warn(JSON.stringify(state.optList))
      Vue.set(state, 'optList', optList)
      console.warn('deleteModel')
      console.warn(JSON.stringify(optList))
      console.warn(JSON.stringify(state.optList))
      if (payload > -1 && payload < state.config.length) {
        if (payload === state.config.length - 1) {
          state.selectIndex = parseInt(payload) - 1
        } else {
          state.selectIndex = parseInt(payload)
        }
        state.config.splice(payload, 1)
        state.cmpList.splice(payload, 1)
      }
    },
    setSelectIndex (state, payload) {
      console.warn('setSelectIndex')
      console.warn(payload)
      state.selectIndex = payload
    },
    setPreviewWindow (state, payload) {
      state.previewWindow = payload
    },
    newPage (state) {
      state.pageDetail = ObjectFactory.emptyPageDetail()
      state.share = ObjectFactory.emptyShare()
      state.config = []
    },
    setList (state, payload) {
      state.pageList = payload.pageList
      state.pageInfo = payload.pageInfo
    },
    deletePage (state, payload) {
      state.pageList.splice(payload, 1)
    },
    changePageValue (state, payload) {
      setPath(state, payload.path, payload.value)
    }
  },
  actions: {
    publish (context, payload) {
      request.publish(payload.params).then(json => {
        if (json && json.code === 200) {
          payload.cb && payload.cb(json)
        } else {
          context.commit('error', json && json.msg)
        }
      })
    }
  },
  getters: {
  }
}
