
import config from '../config';
import gulp         from 'gulp';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import watchify     from 'watchify';
import browserify from 'browserify';
import babelify     from 'babelify';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import debowerify   from 'debowerify';
import ngAnnotate   from 'browserify-ngannotate';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  let bundler = browserify({
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

  let transforms = [
    { 'name':babelify, 'options': {}},
    { 'name':debowerify, 'options': {}},
    { 'name':ngAnnotate, 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    let stream = bundler.bundle();
    let createSourcemap = config.browserify.prodSourcemap;

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
