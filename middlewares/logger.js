module.exports = app => app.router.use(require('morgan')(app.settings.logger));
