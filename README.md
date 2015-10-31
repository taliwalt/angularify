# Angularify
![Angular Browserify Way](docs/images/browserify-angularjs.png)

Is a boilerplate for developing, testing and deploying AngularJS applications with ES6 (ECMAScript 6) using Browserify bundler.

## Technologies:
![](docs/images/angular.png) ![](docs/images/browserify.png) ![](docs/images/gulp.png) ![](docs/images/es6.png) ![](docs/images/karma.png) ![](docs/images/protractor.png) ![](docs/images/jasmine.png) ![](docs/images/sass.png) 


### Getting Started 
```sh
$ git clone https://github.com/yabasha/angularify.git
$ cd angularify
$ npm install
```

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

### Run
**Development Server**
```sh
$ gulp dev
```
**Build the project**
```sh
$ gulp production
```

### Deploy
If you want to deploy your app under subfolder, don't forget to configure `<base href="/subfolder/">` or leave it `<base href="/">` if you want to install it under the root folder.
 
----------
###Documentation
- [gulp tasks](docs/gulp.md)

----------

### Version
1.0.0

###License
<a href="http://en.wikipedia.org/wiki/MIT_License" target="_blank">MIT</a>

###TODO
- Change sources (js, css, images) urls to cdn urls

   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   

