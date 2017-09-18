module.exports = (app) => {
    const router = app.Router();

    router
        .get('/statuses',
            app.actions.instances.list.expose()
        )

        .post('/subscribe',
            app.middlewares.bodyParser.json(),
            app.actions.instances.subscribe.expose()
        )

        .post('/unsubscribe',
            app.actions.instances.unsubscribe.expose()
        )

        .get('/next',
            app.actions.instances.next.expose()
        );

    app.server.use('/registry', router);
};
