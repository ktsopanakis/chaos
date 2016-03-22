module.exports = function() {
  var temp = './.tmp/';
  var build = './.build/';


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
    images: 'images/**/*.*',
    css: temp + 'styles.css',
    less: 'styles/styles.less',
  };

  return config;
};
