var config = require('./config/gulp.conf')();
var helpers = require('./src/utilities/gulpHelpers')();

var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');

var gulpTaskListing = require('gulp-task-listing');
var gulpIf = require('gulp-if');
var gulpJscs = require('gulp-jscs');
var gulpJshint = require('gulp-jshint');
var stylish = require('gulp-jscs-stylish');
var gulpPrint = require('gulp-print');
var gulpUtil = require('gulp-util');

// display all possible tasks
gulp.task('help', gulpTaskListing);

// assign default functionality to help task
gulp.task('default', ['help']);

// analyze code in order to see if everything is in order
gulp.task('vet', function() {
  helpers.log('Analyzing source with JSHint and JSCS' + config.alljs);
  return gulp
    .src(config.alljs)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulpJscs())
    .pipe(gulpJshint())
    .pipe(stylish.combineWithHintResults())
    .pipe(gulpJshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(gulpJshint.reporter('fail'));
});

//cleaning files from temporary and build folders
gulp.task('clean', function(done) {
  var delconfig = [].concat(config.build, config.temp);
  helpers.log('Cleaning: ' + gulpUtil.colors.blue(delconfig));
  del(delconfig, done);
});

gulp.task('clean-fonts', function(done) {
  helpers.clean(config.build + 'fonts/**/*.*', done);
});

gulp.task('clean-images', function(done) {
  helpers.clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean-styles', function(done) {
  helpers.clean(config.temp + '**/*.css', done);
});

gulp.task('clean-code', function(done) {
  var files = [].concat(
    config.temp + '**/*.js',
    config.build + '**/*.html',
    config.build + 'js/**/*.js'
  );
  helpers.clean(files, done);
});
