/*jshint node:true*/
'use strict';

//configuration
var config = require('../utilities/config');

//express
var express = require('express');
var path = require('path');
var app = express();

// serving static files
switch (config.env) {
  case 'production':
    console.log('** PRODUCTION STATIC FILES SERVER BY NGINX **');
    break;
  case 'build':
    console.log('** BUILD **');
    app.use(express.static('./.build/'));
    break;
  case 'test':
    console.log('** TEST **');
    app.use(express.static('./.build/'));
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./src/client/'));
    app.use(express.static('./'));
    break;
}

module.exports = app;
