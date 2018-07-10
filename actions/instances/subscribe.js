const Action = require('idylle').Action;

module.exports = app => Action({
    rules: [
        context => (context.data.realm && context.data.port && context.data.access_token) || context.error(400, 'missing.data')
    ],
    execute: (context) => {
        const Instance = app.models.Instance;
        const address = context.data.address || context.socket.handshake.address;
        const port = context.data.port;
        const uid = context.socket.id;

        return Instance
            .update(
                { address, port },
                {
                    uid, address, port,
                    realm: context.data.realm,
                    timeout: context.data.timeout || app.settings.dispatch_timeout,
                    access_token: context.data.access_token
                },
                {
                    upsert: true
                });
    }
});
