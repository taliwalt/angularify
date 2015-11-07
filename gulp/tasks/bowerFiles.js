import { config }  from '../config';
import gulp        from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();

gulp.task('bowerFiles', () => {
  let jsFilter = $.filter('**/*.js', {restore: true});
  let cssFilter = $.filter('**/*.css', {restore: true});
  return gulp.src('./bower.json')
    .pipe($.mainBowerFiles())
    .pipe(jsFilter)
    .pipe($.concat('vendors.js'))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest('./build'))
    .pipe(cssFilter)
    .pipe($.concat('vendors.css'))
    .pipe(gulp.dest('./build'));
});
