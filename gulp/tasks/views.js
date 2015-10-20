'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe($.angularTemplatecache({
      moduleSystem: 'ES6',
      standalone: true,
      templateFooter: '}]).name;'
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }));

});
