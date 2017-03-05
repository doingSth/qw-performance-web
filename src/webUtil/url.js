/**
 * Created by shen on 2017/1/13.
 */
var url = {
  'queryDataDto': '/performance/queryDataAboutLineChart'
}
var textUrl = {
  'queryDataDto': 'http://localhost:8080/performance/queryDataAboutLineChart'
}
if (window.location.href.indexOf('localhost') > -1) {
  url = textUrl
}
module.exports = url
