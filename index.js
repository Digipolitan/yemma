global.Action = require('idylle').Action;
global.Request = require('request-promise');

const Core = require('idylle').Core;

const registry = new Core();

registry
    .on(Core.events.init.dependencies, app => ({
        errorHandler: (req, res, error) => {
            console.error(error);
            try { error.reason = JSON.parse(error.reason || error); } catch (Error) { error.reason = null; }
            res.status(error.code || 500).send(error.reason || error);
        }
    }))
    .on(Core.events.started, core => console.log(`Server listening on port ${core.settings.port}`))
    .start();

module.exports = registry;
