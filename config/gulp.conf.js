module.exports = function() {
  var temp = './.tmp/';
  var build = './.build/';
  var client = './src/client/';
  var clientApp = client + 'app/';


  var config = {
    /**
     * browser sync
     */
    browserReloadDelay: 1000,
    
    alljs: [
      './src/**/**.js',
      './config/**.js'
    ],
    build: build,
    client: client,
    index: client + 'index.html',
    temp: temp,
    fonts: [
      './bower_components/bootstrap/fonts/**/*.*',
      client + 'fonts/**/*.*'
    ],
    images: client + 'images/**/*.*',
    css: temp + 'styles.css',
    less: client + 'styles/styles.less',
    bower: {
      json: require('../bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    },
    js: [
      client + '**/*.js',
      '!' + client + '**/*.spec.js'
    ],
    html: client + '**/*.html',
    /**
     * optimized files
     */
    optimized: {
      app: 'app.js',
      lib: 'lib.js'
    },

    htmltemplates: clientApp + '**/*.html',
    /**
     * template cache
     */
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'app.core',
        standAlone: false,
        root: 'app/'
      }
    },
  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };

    return options;
  };

  return config;
};
