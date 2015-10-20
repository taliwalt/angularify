import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean', 'libs'], (cb) => {

  cb = cb || function () {
    };

  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'views', 'extras', 'browserify'], 'watch', cb);

});
