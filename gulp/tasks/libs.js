import config from '../config';
import gulp   from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('libs', () => {

  return gulp.src('app/bower_components/modernizr/modernizr.js')
    .pipe($.uglify())
    .pipe(gulp.dest(config.scripts.dest, {overwrite: true}));
});
