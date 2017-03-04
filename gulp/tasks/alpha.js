var gulp = require('gulp');
var shell = require('gulp-shell');
var cheerio = require('gulp-cheerio');
var del = require('del');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');
var replace = require('gulp-replace');
var publishFtp = require('@dp/peon-publish');
var path = require('path');
gulp.task('build-alpha', shell.task([
  'npm run build'
]));
gulp.task('appendHtml-alpha',['build-alpha'], function() {
  return gulp.src('./dist/index.html')
    .pipe(cheerio(function ($) {
      $('head').append("<script>window.userInfo = JSON.parse('<%-JSON.stringify(userInfo)%>');</script>");
    }))
    .pipe(replace("/static/", "https://s1.51ping.com/app/uno-web/static/"))
    .pipe(gulp.dest('./view/template/'));
});
gulp.task('ftp-alpha', ['appendHtml-alpha'], function() {
  return publishFtp.publish('uno-web',path.resolve(__dirname,'../../dist'),'beta').then(function(){
    return true
  });
});
gulp.task('alpha',['ftp-alpha'], function() {
  del([
    './dist'
  ]);
});

