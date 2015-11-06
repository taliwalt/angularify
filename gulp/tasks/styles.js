import { config }   from '../config';
import gulp         from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps

gulp.task('styles', ['injectStyles'], () => {

  let createSourcemap = config.styles.prodSourcemap;

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
      $.sourcemaps.write(!global.isProd ? './' : null))
    )
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({once: true}));

});
