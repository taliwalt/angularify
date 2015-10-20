import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], (cb) => {

  cb = cb || function () {
    };

  global.isProd = false;

  runSequence(['libs', 'styles', 'images', 'fonts', 'views', 'extras', 'browserify'], 'watch', cb);

});
