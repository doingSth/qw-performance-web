/**
 * Created by shen on 2017/1/13.
 */
var url = {
  'comMap': '/ajax/getMapAboutTypeToComponents',
  'savePage': '/ajax/savePage',
  'getPageList': '/ajax/getPageList',
  'getPageConfigByTopicId': '/ajax/getPageConfigByTopicId',
  'getTemplateList': '/ajax/getTemplateList',
  'modelType': '/external/modelType',
  'createItemId': '/external/createItemId',
  'publishUrl': '/external/build',
  'savePageItemIdMap': '/external/savePageItemIdMap',
  'copyPage': '/ajax/copyPage',
  'deleteItemIds': '/external/deleteItemIds',
  'sendMessage': '/external/sendMessage',
  'logout': '/ajax/logout'
}
var textUrl = {
  'comMap': '//localhost:8080/ajax/getMapAboutTypeToComponents',
  'savePage': '//localhost:8080/ajax/savePage',
  'getPageList': '//localhost:8080/ajax/getPageList',
  'getPageConfigByTopicId': '//localhost:8080/ajax/getPageConfigByTopicId',
  'getTemplateList': '//localhost:8080/ajax/getTemplateList',
  'modelType': '//localhost:8080/external/modelType',
  'createItemId': '//localhost:8080/external/createItemId',
  'publishUrl': '//localhost:8080/external/build',
  'savePageItemIdMap': '//localhost:8080/external/savePageItemIdMap',
  'copyPage': '//localhost:8080/ajax/copyPage',
  'deleteItemIds': '//localhost:8080/external/deleteItemIds',
  'sendMessage': '//localhost:8080/external/sendMessage',
  'logout': '//localhost:8080/ajax/logout'
}
if (window.location.href.indexOf('localhost') > -1) {
  url = textUrl
}
module.exports = url
