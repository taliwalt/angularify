##Gulp Features
With the new version of gulp 3.9.0 we can use `ES6` features with gulp but instead of `gulpfile.js` we need to change the file name to `gulpfile.babel.js` and install `babel` node module to use `ES6` features.

`gulpfile.babel.js` use `ES6` modules to import the main file from gulp folder and set a global variable isProd to tell gulp tasks to produce code for development or production (like minification, images optimization, etc.)

gulp folder includes `tasks subfolder` where all gulp tasks are stored, `config.js` which is a json object contains the tasks different configurations and `index.js` which requires tasks from `tasks subfolder` after filtering `.js` files.
###Gulp tasks
I decided to split `gulpfile.babel.js` up into several files inside the `gulp` directory. Now, the `gulpfile.babel.js` does nothing more than loading all `.js` files inside the gulp directory. 

 - **browserify**: task to bundle js modules.
 - **browserSync**: task to run full-featured development web server with livereload and devices sync
 - **clean**: task to empty `build` folder from files and subfolders.
 - **deploy**: task is empty so you can put any deployment logic you want.
 - **development**: dev task run these tasks **clean**, **libs**, **styles**, **images**, **fonts**, **views**, **extras**, **browserify** and **watch**
 - **extras**: task copy other files (.htaccess, favicon.ico, robot.txt,,,etc) from the root folder.
 - **fonts**: task to copy fonts to build folder
 - **gzip**: task to compress the files for production
 - **images**: task optimize the images for production
 - **libs**: task copy libraries files, now it copy `modernizr` file
 - **lint**: task to check js files for errors
 - **production**: prod task run these tasks for production **clean**, **libs**, **styles**, **images**, **fonts**, **views**, **browserify**, and **gzip**
 - **protractor**: task to run protractor end-to-end tests
 - **server**: task run development server
 - **styles**: task compiles `sass` files to `css` files
 - **test**: task run both `unit` and `protractor` tests
 - **unit**: task run `karma` server to do `unit` tests
 - **views**: task minify `index.html` file and generate `angular` module `$templateCache` from html views for `angular` components
 - **watch**: task watch any source files for any changes and update them on the running development server.

> *You can add tasks to gulp/tasks folder and run them*
