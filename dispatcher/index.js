const Dispatcher = require('./Dispatcher');

module.exports = app => app.dispatcher = new Dispatcher(app.models.Instance);
