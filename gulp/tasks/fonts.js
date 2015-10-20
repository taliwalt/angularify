'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('fonts', function() {

  return gulp.src(config.fonts.src)
    .pipe($.changed(config.fonts.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({ once: true }));

});
