const _ = require('lodash');

module.exports = settings => {
    _.merge(
        settings,
        require('./settings.json')
    );

    return settings;
};