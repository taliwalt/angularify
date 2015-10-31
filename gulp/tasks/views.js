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

  //configure cdnizer to be used when global.isProd is true
  gulp.src(config.source.index)
    .pipe($.if(global.isProd, $.cdnizer({
        defaultCDNBase: config.cdn.url,
        files: [
          {
            file: 'js/**/*.js'
          }
          ,
          {
            file: 'css/**/*.css'
          }
        ]
      })
    ))
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe($.if(global.isProd, $.cdnizer({
        defaultCDNBase: config.cdn.url,
        files: [
          {
            file: 'images/**/*'
          }
        ]
      })
    ))
    .pipe($.angularTemplatecache({
      moduleSystem: 'ES6',
      standalone: true,
      templateFooter: '}]).name;'
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({once: true}));

});
