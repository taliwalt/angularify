import config from '../config';
import gulp   from 'gulp';
import stylish from 'jshint-stylish';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('lint', () => {
  return gulp.src([config.scripts.src, '!app/src/templates.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});
