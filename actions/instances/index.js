module.exports = app => ({
    subscribe: require('./subscribe')(app),
    unsubscribe: require('./unsubscribe')(app),
    next: require('./next')(app)
});
