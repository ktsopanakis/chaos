module.exports = function() {
  var temp = './.tmp/';
  var build = './.build/';
  var client = './src/client/';


  var config = {
    alljs: [
      './src/**/**.js',
      './config/**.js'
    ],
    build: build,
    temp: temp,
    fonts: [
      './bower_components/bootstrap/fonts/**/*.*',
      'fonts/**/*.*'
    ],
    images: client + 'images/**/*.*',
    css: temp + 'styles.css',
    less: client + 'styles/styles.less',
  };

  return config;
};
