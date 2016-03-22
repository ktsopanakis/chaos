var app = require('./app');
var config = require('../utilities/config');

// some logging before the server starts up
console.log('PORT=' + config.serverPort);
console.log('NODE_ENV=' + config.env);


// firing up the server
app.set('port', config.serverPort);

//NOTE: The following should be uncommented if you want to sync while working
//var models = require('./models/sequelize/all');
//models.sequelize.sync().then(function () {
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('__dirname = ' + __dirname + '  | process.cwd = ' + process.cwd());
});
//});
