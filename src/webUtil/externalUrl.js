/**
 * Created by shen on 2017/1/13.
 */
var url = {
  'couponId': 'http://rainbow.51ping.com/#/toast/coupon/edit/',
  'itemId': 'http://rainbow.51ping.com/#/toast/topic/bind/{itemId}',
  'build': 'http://10.66.68.44:8080',
  'upload': '//gmkt.activ.51ping.com/topic/uploadPic/',
  'pageData': 'http://rainbow.51ping.com/#/toast/topic/viewTopic/{topicId}?version=alpha',
  'uno': 'http://uno.51ping.com'
}
var productUrl = {
  'couponId': 'http://rainbow.dper.com/#/toast/coupon/edit/',
  'itemId': 'http://rainbow.dper.com/#/toast/topic/bind/{itemId}',
  'build': 'http://10.69.49.2:8080',
  'upload': '//gmkt.activ.dianping.com/topic/uploadPic/',
  'pageData': 'http://rainbow.dper.com/#/toast/topic/viewTopic/{topicId}?version=alpha',
  'uno': 'http://uno.dianping.com'
}
if (window.location.origin.indexOf('dianping') > -1) {
  url = productUrl
}
module.exports = url
