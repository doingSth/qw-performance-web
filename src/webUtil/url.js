/**
 * Created by shen on 2017/1/13.
 */
var url = {
  'queryDataDto': '/performance/queryDataAboutLineChart',
  'queryPersonalDataDto': '/performance/queryPersonalDataAboutLineChart',
  'queryUrlList': '/performance/queryUrlList',
  'queryKeyList': '/performance/queryKeyList'
}
var textUrl = {
  'queryDataDto': 'http://localhost:8080/performance/queryDataAboutLineChart',
  'queryPersonalDataDto': 'http://localhost:8080/performance/queryPersonalDataAboutLineChart',
  'queryUrlList': 'http://localhost:8080/performance/queryUrlList',
  'queryKeyList': 'http://localhost:8080/performance/queryKeyList'
}
if (window.location.href.indexOf('localhost') > -1) {
  url = textUrl
}
module.exports = url
