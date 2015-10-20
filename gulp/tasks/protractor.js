'use strict';

var gulp            = require('gulp');
var config          = require('../config');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('webdriver-update', $.protractor.webdriver_update);
gulp.task('webdriver', $.protractor.webdriver);

gulp.task('protractor', ['webdriver-update', 'webdriver', 'server'], function(cb) {

  gulp.src('test/e2e/**/*.js').pipe($.protractor.protractor({
      configFile: config.test.protractor
  })).on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  }).on('end', function() {
    process.exit();
    cb();
  });

});
