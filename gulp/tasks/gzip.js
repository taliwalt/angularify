'use strict';

var gulp   = require('gulp');
var config = require('../config');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('gzip', function() {

  return gulp.src(config.gzip.src)
    .pipe($.gzip(config.gzip.options))
    .pipe(gulp.dest(config.gzip.dest));

});
