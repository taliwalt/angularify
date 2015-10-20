import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], (cb) => {

  cb = cb || function () {
    };

  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'views', 'extras', 'browserify'], 'watch', cb);

});
