const morgan = require('morgan');
module.exports = app => app.server.use(morgan(app.settings.logger.level));
