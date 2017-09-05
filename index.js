global.Action = require('idylle').Action;
global.utils = require('idylle').Utils;

const Core = require('idylle').Core;
const app  = new Core();

app
    .on(Core.events.started, app => console.log(`Server listening on port ${app.settings.port}`))
    .start();

module.exports = app;
