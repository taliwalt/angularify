import { config }  from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

var $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('fonts', () => {

  return gulp.src(config.fonts.src)
    .pipe($.changed(config.fonts.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({ once: true }));

});
