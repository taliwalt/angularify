import { config }  from '../config';
import gulp        from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();

gulp.task('injectStyles', () => {
  let sources = gulp.src([config.styles.scss], {read: false});

  return gulp.src(config.styles.mainStyleFile)
    .pipe($.inject(sources, {relative: true}))
    .pipe(gulp.dest(config.styles.stylesFolder));
});
