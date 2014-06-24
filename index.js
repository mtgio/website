var debug = require('debug')('mtgio');
var data = require('./data/');
var server = require('./server/');

data.init();
server.start();
