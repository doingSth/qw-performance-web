/**
 * Created by shen on 2017/1/16.
 */
import request from '../webUtil/request'
module.exports = {
  state: {
    'modelType': [],
    'platformList': [
      {'name': '点评', id: '1'},
      {'name': '美团', id: '2'}
    ],
    'itemTypeMap': {
      'deal': 1,
      'content': 3,
      'shop': 2
    },
    'pagePublishStatusList': [
      {'label': '全部', 'key': undefined},
      {'label': '草稿', 'key': 1},
      {'label': '发布中', 'key': 3},
      {'label': '发布成功', 'key': 2},
      {'label': '发布失败', 'key': 4}
    ],
    'pageStatusList': [
      {'label': '全部', 'key': undefined},
      {'label': '草稿', 'key': 1},
      {'label': '进行中', 'key': 2},
      {'label': '已过期', 'key': 3}
    ]
  },
  mutations: {
    setModelType (state, payload) {
      state.modelType = payload
    }
  },
  actions: {
    getEnums (context) {
      request.getModelType().then(json => {
        if (json && json.code === 200) {
          context.commit('setModelType', json && json.data)
        } else {
          context.commit('error', json && json.msg)
        }
      })
    }
  },
  getters: {}
}
