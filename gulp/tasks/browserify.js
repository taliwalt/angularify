'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var watchify     = require('watchify');
var browserify   = require('browserify');
var babelify     = require('babelify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var debowerify   = require('debowerify');
var ngAnnotate   = require('browserify-ngannotate');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  var bundler = browserify({
    entries: config.browserify.entries,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  var transforms = [
    { 'name':babelify, 'options': {}},
    { 'name':debowerify, 'options': {}},
    { 'name':ngAnnotate, 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    var stream = bundler.bundle();
    var createSourcemap = config.browserify.prodSourcemap;

    $.util.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe($.if(createSourcemap, buffer()))
      .pipe($.if(createSourcemap, $.sourcemaps.init()))
      .pipe($.if(global.isProd, $.streamify($.uglify({
        compress: { drop_console: true }
      }))))
      .pipe($.if(createSourcemap, $.sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({ once: true }));
  }

  return rebundle();

}

gulp.task('browserify', function() {

  return buildScript(config.browserify.bundleName);//output filename

});
