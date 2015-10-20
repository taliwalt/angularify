'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps

gulp.task('styles', function () {

  var createSourcemap = config.styles.prodSourcemap;

  return gulp.src(config.styles.src)
    .pipe($.if(createSourcemap, $.sourcemaps.init()))
    .pipe($.sass({
      //outputStyle: nested, expanded, compact, or compressed.
      sourceComments: false,
      outputStyle: global.isProd ? 'compressed' : 'compact',
      includePaths: config.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe($.if(
      createSourcemap,
      $.sourcemaps.write( !global.isProd ? './' : null ))
    )
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({ once: true }));

});
