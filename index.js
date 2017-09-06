global.Action = require('idylle').Action;
global.Request = require('request-promise');

const Core = require('idylle').Core;

const registry = new Core();
registry.events = Core.events;

module.exports = registry;

