var ld = require('lodash');

var config = {};

config.dev = {
  //environment
  env: 'dev',
  //web server settigns
  serverPort: 1337,
  // other settings
  other: {}
};

// config when running in build mode
config.build = ld.cloneDeep(config.dev);
config.build.env = 'build';

// configuration for pandora ci
config.test = ld.cloneDeep(config.dev);
config.test.env = 'test';

// config when running on a production server (NODE_ENV=production)
config.production = ld.cloneDeep(config.dev);
config.production.env = 'production';

module.exports = config;
