export const config = {

  'browserPort': 3000,
  'UIPort': 3001,
  'serverPort': 3002,

  'styles': {
    'src': 'app/styles/**/*.scss',
    'dest': 'build/css',
    'prodSourcemap': false,
    'sassIncludePaths': []
  },

  'source': {
    'index': 'app/index.html'
  },

  'scripts': {
    'src': 'app/src/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src': 'app/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'src': ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'cdn': {
    'url': 'http://ayyash-zone.ncci.netdna-cdn.com'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/src/**/*.html'
    ],
    'src': 'app/src/**/*.html',
    'dest': 'app/src'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root': 'build'
  },

  'browserify': {
    'entries': ['./app/src/app.js'],
    'bundleName': 'bundle.js',
    'prodSourcemap': true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
