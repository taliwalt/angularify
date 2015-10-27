import { config }  from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('images', () => {

  return gulp.src(config.images.src)
    .pipe($.changed(config.images.dest)) // Ignore unchanged files
    .pipe($.if(global.isProd, $.imagemin())) // Optimize
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));

});
