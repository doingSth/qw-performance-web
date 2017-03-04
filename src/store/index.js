/**
 * Created by shen on 2017/1/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import enums from './enums.js'
import page from './page.js'
import request from '../webUtil/request'
Vue.use(Vuex)
module.exports = new Vuex.Store({
  modules: {
    enums: enums,
    page: page
  },
  state: {
    error: undefined
  },
  mutations: {
    error (state, payload) {
      state.error = payload
    }
  },
  actions: {
    logout (context, payload) {
      request.logout(payload).then(json => {
        if (json && json.code === 200) {
          payload.cb && payload.cb()
        } else {
          context.commit('error', json && json.msg)
        }
      })
    }
  }
})
