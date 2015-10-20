'use strict';

var config = require('../config');
var gulp   = require('gulp');
var stylish = require('jshint-stylish');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('lint', function() {
  return gulp.src([config.scripts.src, '!app/src/templates.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});
