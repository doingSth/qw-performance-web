/**
 * Created by shen on 2017/1/13.
 */
import fetch from 'isomorphic-fetch'
import urlUtil from './url'
import qs from 'qs'
let fetchRequest = function (url, options) {
  var opt = options;
  if(location.origin.indexOf('localhost') == -1 || location.origin.indexOf('8080') > -1){
    opt = Object.assign({credentials: 'include'}, options)
  }
  return fetch(url, opt).then(res => {
    return res.json()
  }).then(json => {
    return json.data
  })
}
module.exports = {
  getComMap: function () {
    return fetchRequest(urlUtil.comMap)
  },
  getModelType: function () {
    return fetchRequest(urlUtil.modelType)
  },
  savePage: function (params) {
    return fetchRequest(urlUtil.savePage, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(params)
    })
  },
  getPageList: function (params) {
    return fetchRequest(urlUtil.getPageList + '?' + qs.stringify(params))
  },
  getPageConfigByTopicId: function (id) {
    return fetchRequest(urlUtil.getPageConfigByTopicId + '?topicId=' + id)
  },
  getTemplateList: function () {
    return fetchRequest(urlUtil.getTemplateList)
  },
  createItemId: function (params) {
    return fetchRequest(urlUtil.createItemId + '?' + qs.stringify(params))
  },
  publish: function (params) {
    return fetchRequest(urlUtil.publishUrl + '?' + qs.stringify(params))
  },
  savePageItemIdMap: function (params) {
    return fetchRequest(urlUtil.savePageItemIdMap + '?' + qs.stringify(params))
  },
  copyPage: function (params) {
    return fetchRequest(urlUtil.copyPage, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(params)
    })
  },
  deleteItemIds: function (params) {
    return fetchRequest(urlUtil.deleteItemIds + '?' + qs.stringify(params))
  },
  sendMessage: function (params) {
    return fetchRequest(urlUtil.sendMessage + '?' + qs.stringify(params))
  },
  logout: function () {
    return fetchRequest(urlUtil.logout)
  }
}
