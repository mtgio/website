var mongoose = require('mongoose');

exports.init = function() {
  mongoose.connect(process.env.MONGO_CONNECTION);
};