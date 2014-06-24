
module.exports = {
  port: process.env.PORT || 3000,
  sessionSecret: process.env.SESSION_SECRET || 'super secret secret',
  mongoUrl: process.env.MONGO_CONNECTION
};