module.exports = (app) => {

    app.io.on('connection', socket => {
        if (socket.handshake.query.token !== app.settings.access_token) {
            console.error('> invalid_token during handshake. disconnecting..');
            return socket.disconnect();
        }

        socket.on('error', error => console.error(`> Error with ${socket.id}. \n`, error));
        socket.on('disconnecting', reason => console.warn(`> Socket ${socket.id} disconnecting.. reason: `, reason));
        socket.on('disconnect', reason => {
            console.warn(`> Socket ${socket.id} disconnected. reason: `, reason);
            app.actions.instances.unsubscribe.io()
        });

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
    });
};
