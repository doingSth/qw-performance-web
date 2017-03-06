/**
 * Created by shen on 2017/1/13.
 */
var url = {
  'queryDataDto': '/performance/queryDataAboutLineChart',
  'queryUrlList': '/performance/queryUrlList'
}
var textUrl = {
  'queryDataDto': 'http://localhost:8080/performance/queryDataAboutLineChart',
  'queryUrlList': 'http://localhost:8080/performance/queryUrlList'
}
if (window.location.href.indexOf('localhost') > -1) {
  url = textUrl
}
module.exports = url
