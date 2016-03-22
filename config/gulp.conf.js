module.exports = function() {
  var assets = './src/assets/';
  var temp = './.tmp/';
  var build = './.build/';

  var backend = './src/clients/backend/';

  var config = {
    backend : backend,
    alljs: [
      './src/**/**.js',
      './config/**.js'
    ],
    build: build,
    temp: temp,
    fonts: [
      './bower_components/bootstrap/fonts/**/*.*',
      assets + 'fonts/**/*.*'
    ],
    images: assets + 'images/**/*.*',
    css: temp + 'styles.css',
    less: 'styles/styles.less',
  };

  return config;
};
