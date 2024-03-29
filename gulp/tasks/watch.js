import { config } from '../config';
import gulp       from 'gulp';

gulp.task('watch', ['browserSync', 'server'], () => {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.fonts.src, ['fonts']);
  gulp.watch(config.views.watch, ['views']);

});
