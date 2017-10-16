// index.js

const routes = require('./routes.js');

module.exports = function(app, db) {
    routes(app, db);
    // Other route groups could go here, in the future
  };