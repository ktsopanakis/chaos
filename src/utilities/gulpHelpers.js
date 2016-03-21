module.exports = function() {
  var gulpUtil = require('gulp-util');
  var del = require('del');

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

  return {
    log: log,
    clean:clean
  };
};
