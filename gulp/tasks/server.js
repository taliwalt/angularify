import { config }  from '../config';
import http    from 'http';
import express from 'express';
import gulp    from 'gulp';
import morgan  from 'morgan';
import gulpLoadPlugins from 'gulp-load-plugins';//load gulp plugins

let $ = gulpLoadPlugins();
// $ = gulp- in the pugin name
// gulp-if = $.if, gulp-sourcemaps = $.sourcemaps
// gulp-angular-templatecache = $.angularTemplateCache

gulp.task('server', () => {

  let server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static(config.dist.root));

  // Serve index.html for all routes to leave routing up to Angular
  server.all('/*', function (req, res) {
    res.sendFile('index.html', {root: 'build'});
  });

  // Start webserver if not already running
  let s = http.createServer(server);
  s.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      $.util.log('Development server is already started at port ' + config.serverPort);
    }
    else {
      throw err;
    }
  });

  s.listen(config.serverPort);

});
