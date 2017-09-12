module.exports = app => init(app);

function init(app) {
    require('./connect')(app);
    require('./dispatcher')(app);
    require('../static/index')(app);
}
