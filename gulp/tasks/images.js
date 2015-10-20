'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('images', function() {

  return gulp.src(config.images.src)
    .pipe($.changed(config.images.dest)) // Ignore unchanged files
    .pipe($.if(global.isProd, $.imagemin())) // Optimize
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));

});
