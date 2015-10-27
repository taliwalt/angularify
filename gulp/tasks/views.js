import { config }      from '../config';
import gulp            from 'gulp';
import browserSync     from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

// Views task
gulp.task('views', () => {

  // Put our index.html in the dist folder
  gulp.src(config.source.index)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
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
