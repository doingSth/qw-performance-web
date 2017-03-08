/**
 * Created by shen on 2017/1/13.
 */
import fetch from 'isomorphic-fetch'
import urlUtil from './url'
import qs from 'qs'
let fetchRequest = function (url, options) {
  var opt = options;
  //if(location.origin.indexOf('localhost') == -1 || location.origin.indexOf('8080') > -1){
  //  opt = Object.assign({credentials: 'include'}, options)
  //}
  return fetch(url, opt).then(res => {
    return res.json()
  }).then(json => {
    return json
  })
}
module.exports = {
  queryDataDto: function (params) {
    return fetchRequest(urlUtil.queryDataDto+"?"+qs.stringify(params))
  },
  queryPersonalDataDto: function (params) {
    return fetchRequest(urlUtil.queryPersonalDataDto+"?"+qs.stringify(params))
  },
  queryUrlList: function () {
    return fetchRequest(urlUtil.queryUrlList)
  },
  queryKeyList: function () {
    return fetchRequest(urlUtil.queryKeyList)
  },
  savePage: function (params) {
    //return fetchRequest(urlUtil.savePage, {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/x-www-form-urlencoded'
    //  },
    //  body: qs.stringify(params)
    //})
  }
}
