const Action = require('idylle').Action;

module.exports = (app) => {
    const Instance = app.models.Instance;

    return Action({
        rules: [],
        execute: context => {
            const uid = context.socket.id;
            return Instance
                .remove({ uid })
        }
    });
};
