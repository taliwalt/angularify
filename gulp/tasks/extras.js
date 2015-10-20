import config from '../config';
import gulp from 'gulp';

// copy other files (.htaccess, favicon.ico, robot.txt,,,etc) in the app root folder other than html
gulp.task('extras', () => {
  return gulp.src(['app/*.*', '!app/*.html'], {dot: true})
    .pipe(gulp.dest(config.dist.root));
});
