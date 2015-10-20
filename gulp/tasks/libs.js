import config from '../config';
import gulp   from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('libs', () => {
  var assets = $.useref.assets();

  return gulp.src(config.source.index)
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest(config.dist.root));
});
