import gulp   from 'gulp';
import config from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('unit', ['views'], () => {

  // Nonsensical source to fall back to files listed in karma.conf.js,
  // see https://github.com/lazd/gulp-karma/issues/9
  return gulp.src('./thisdoesntexist')
    .pipe($.karma({
      configFile: config.test.karma,
      action: 'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});
