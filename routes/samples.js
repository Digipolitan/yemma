/**
 * This is the routing part.
 * Everytime an action is created, you can decide if you
 * to expose it over the HTTP protocol through the expose() method.
 */
module.exports = app => {
    const router = app.Router();    // Getting a router from the app let you use prefixed routes (line 13.)

    router.get('/',
        app.actions.sample.expose() // As mentioned before, you can expose an action to make it compatible with an express middleware.
    );

    app.server.use('/hello', router);
};