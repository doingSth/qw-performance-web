var gulp = require('gulp');
var shell = require('gulp-shell');
var cheerio = require('gulp-cheerio');
var del = require('del');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');
var replace = require('gulp-replace');
var publishFtp = require('@dp/peon-publish');
var path = require('path');
gulp.task('build-beta', shell.task([
  'npm version patch && npm run build'
]));
gulp.task('appendHtml-beta',['build-beta'], function() {
  var pkg = require('../../package.json');
  return gulp.src('./dist/index.html')
    .pipe(cheerio(function ($) {
      $('head').append("<script>window.userInfo = JSON.parse('<%-JSON.stringify(userInfo)%>');</script>");
    }))
    .pipe(replace("/static/", `http://www.dpfile.com/ba/es/uno-web/${pkg.version}/static/`))
    .pipe(gulp.dest('./view/template/'));
});
gulp.task('ftp-beta', ['appendHtml-beta'], function() {
  var pkg = require('../../package.json');
  return gulp.src(['./dist/' + '**/*', '!' + './dist/' + 'index.html']).pipe(ftp({
    host: '10.1.131.29',
    port: 21,
    user: 'ba',
    pass: 'eNRicXp3i2M6EAQYBFrQfND7G',
    remotePath: 'es/' + pkg.name + '/' + pkg.version
  })).pipe(gulpUtil.noop());
});
gulp.task('beta',['ftp-beta'], function() {
  del([
    './dist'
  ]);
});

