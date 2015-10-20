import gulp   from 'gulp';
import config from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('gzip', () => {

  return gulp.src(config.gzip.src)
    .pipe($.gzip(config.gzip.options))
    .pipe(gulp.dest(config.gzip.dest));

});
