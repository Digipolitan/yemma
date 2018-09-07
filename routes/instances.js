module.exports = (app) => {

    app.io.on('connection', socket => {
        if (socket.handshake.query.token !== app.settings.access_token) {
            console.error('> invalid_token during handshake. disconnecting..');
            return socket.disconnect();
        }

        const router = new app.routers.IO(socket, '/registry');

        router
            .on('/next',
                app.middlewares.validateIssuer,
                app.actions.instances.next.io())

            .on('/subscribe',
                app.middlewares.validateIssuer,
                app.actions.instances.subscribe.io())

            .on('/unsubscribe',
                app.middlewares.validateIssuer,
                app.actions.instances.unsubscribe.io());

        new app.routers.IO(socket).on('disconnect', app.actions.instances.unsubscribe.io())
    });
};
