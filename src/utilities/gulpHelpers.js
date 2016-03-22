module.exports = function() {
  var gulpUtil = require('gulp-util');
  var del = require('del');
  var config = require('../../config/gulp.conf')();
  var gulpNodemon = require('gulp-nodemon');
  var browserSync = require('browser-sync');
  var args = require('yargs').argv;
  var gulp = require('gulp');
  var serverConfig = require('./config');

  function log(msg) {
    if (typeof(msg) === 'object') {
      for (var item in msg) {
        if (msg.hasOwnProperty(item)) {
          gulpUtil.log(gulpUtil.colors.blue(msg[item]));
        }
      }
    } else {
      gulpUtil.log(gulpUtil.colors.blue(msg));
    }
  }

  function clean(path, done) {
    log('Cleaning: ' + gulpUtil.colors.blue(path));
    del(path).then(done());
  }

  function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
  }

  function startBrowserSync(isDev, specRunner) {
    if (args.nosync || browserSync.active) {
      return;
    }

    log('Starting browser-sync on port ' + serverConfig.serverPort);

    if (isDev) {

      gulp.watch([config.js, config.less, config.html], [
          'styles',
          'templatecache',
          browserSync.reload
        ])
        .on('change', function(event) {
          changeEvent(event);
        });

    } else {
      gulp.watch([config.js, config.less, config.html], [
          'optimize',
          browserSync.reload
        ])
        .on('change', function(event) {
          changeEvent(event);
        });
    }

    var options = {
      proxy: 'localhost:' + serverConfig.serverPort,
      port: 4000,
      files: isDev ? [
        config.client + '**/*.*',
        '!' + config.less,
        config.temp + '**/*.css'
      ] : [],
      ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
      },
      injectChanges: false,
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'gulp-patterns',
      notify: true,
      reloadDelay: 0
    };

    if (specRunner) {
      options.startPath = config.specRunnerFile;
    }

    browserSync(options);
  }


  function serve(isDev, specRunner) {
    var nodeOptions = {
      legacyWatch: true,
      script: config.nodeServer,
      delayTime: 1,
      env: {
        'PORT': config.serverPort,
        'NODE_ENV': isDev ? 'dev' : 'build'
      },
      watch: [config.server]
    };

    return gulpNodemon(nodeOptions)
      .on('restart', function(ev) {
        log('*** nodemon restarted');
        log('files changed on restart:\n' + ev);
        setTimeout(function() {
          browserSync.notify('reloading now ...');
          browserSync.reload({
            stream: false
          });
        }, config.browserReloadDelay);
      })
      .on('start', function() {
        log('*** nodemon started');
        startBrowserSync(isDev, specRunner);
      })
      .on('crash', function() {
        log('*** nodemon crashed: script crashed for some reason');
      })
      .on('exit', function() {
        log('*** nodemon exited cleanly');
      });
  }

  return {
    log: log,
    clean: clean,
    serve: serve

  };
};
