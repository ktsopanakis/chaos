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
var gulpImagemin = require('gulp-imagemin');
var gulpPlumber = require('gulp-plumber');
var gulpLess = require('gulp-less');
var gulpAutoprefixer = require('gulp-autoprefixer');
var gulpInject = require('gulp-inject');
var gulpMinifyHtml = require('gulp-minify-html');
var gulpAngularTemplatecache = require('gulp-angular-templatecache');
var gulpFilter = require('gulp-filter');
var gulpUseref = require('gulp-useref');
var gulpCsso = require('gulp-csso');
var gulpUglify = require('gulp-uglify');
var gulpNgAnnotate = require('gulp-ng-annotate');
var gulpRev = require('gulp-rev');
var gulpRevReplace = require('gulp-rev-replace');

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

// copying fonts to build directory
gulp.task('fonts', ['clean-fonts'], function() {
  helpers.log('Copying fonts');
  return gulp
    .src(config.fonts)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulp.dest(config.build + 'fonts'));
});

// copying images to build directory
gulp.task('images', ['clean-images'], function() {
  helpers.log('Copying and compressing the images');
  return gulp
    .src(config.images)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulpImagemin({
      optimizationLevel: 4
    }))
    .pipe(gulp.dest(config.build + 'images'));
});

// creating the css files of the client
gulp.task('styles', ['clean-styles'], function() {
  helpers.log('Compiling Less --> CSS');
  return gulp
    .src(config.less)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulpPlumber())
    .pipe(gulpLess())
    .pipe(gulpAutoprefixer({
      browsers: ['last 2 version', '> 5%']
    }))
    .pipe(gulp.dest(config.temp));
});

// create angular templatecache
gulp.task('templatecache', ['clean-code'], function() {
  helpers.log('Creating AngularJS $templateCache');
  return gulp
    .src(config.htmltemplates)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulpMinifyHtml({
      empty: true
    }))
    .pipe(gulpAngularTemplatecache(
      config.templateCache.file,
      config.templateCache.options
    ))
    .pipe(gulp.dest(config.temp));
});

//TODO: bootstrap needs manually adding to the bower.jsopn the css file
// adding dependancies
gulp.task('wiredep', function() {
  helpers.log('Wire up the bower css js and our app js into the html');
  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;
  return gulp
    .src(config.index)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(wiredep(options))
    .pipe(gulpInject(gulp.src(config.js)))
    .pipe(gulp.dest(config.client));
});
gulp.task('inject', ['wiredep', 'styles', 'templatecache'], function() {
  helpers.log('Wire up the app css into the html, and call wiredep ');
  return gulp
    .src(config.index)
    .pipe(gulpIf(args.verbose, gulpPrint()))
    .pipe(gulpInject(gulp.src(config.css)))
    .pipe(gulp.dest(config.client));
});

gulp.task('test', ['vet', 'templatecache'], function(done) {
//  startTests(true /* singleRun */ , done);
});

gulp.task('optimize', ['inject', 'test'], function() {
  helpers.log('Optimizing the javascript, css, html');
  var assets = gulpUseref.assets({
    searchPath: './'
  });
  var templateCache = config.temp + config.templateCache.file;
  var cssFilter = gulpFilter('**/*.css');
  var jsLibFilter = gulpFilter('**/' + config.optimized.lib);
  var jsAppFilter = gulpFilter('**/' + config.optimized.app);
  return gulp
    .src(config.index)
    .pipe(gulpPlumber())
    .pipe(gulpInject(
      gulp.src(templateCache, {
        read: false
      }), {
        starttag: '<!-- inject:templates:js -->'
      }))
    .pipe(assets)
    .pipe(cssFilter)
    .pipe(gulpCsso())
    .pipe(cssFilter.restore())
    .pipe(jsLibFilter)
    .pipe(gulpUglify())
    .pipe(jsLibFilter.restore())
    .pipe(jsAppFilter)
    .pipe(gulpNgAnnotate())
    .pipe(gulpUglify())
    .pipe(jsAppFilter.restore())
    .pipe(gulpRev())
    .pipe(assets.restore())
    .pipe(gulpUseref())
    .pipe(gulpRevReplace())
    .pipe(gulp.dest(config.build))
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest(config.build));
});
