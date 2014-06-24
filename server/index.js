var debug = require('debug')('mtgio:server');
var settings = require('../settings');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = settings.port;
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
debug('connecting to mongo database', settings.mongoUrl);
app.use(session({
  secret: settings.sessionSecret,
  store: new MongoStore({ url: settings.mongoUrl })
}));

io.on('connection', function(socket) {
  debug(socket.id, 'connected');
});

exports.express = express;
exports.io = io;

exports.start = function() {
  server.listen(port, function() {
    debug('ready for connections on port', port);
  });
};
