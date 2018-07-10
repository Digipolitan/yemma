module.exports = app => init(app);

function init(app) {
    app.middlewares = {
        validateIssuer: require('./validateIssuer')(app)
    };
}
