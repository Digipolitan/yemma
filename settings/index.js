const _ = require('lodash');
const utils = require('./utils');

module.exports = (settings) => {
    _.merge(
        settings, require('./settings.json')
    );

    utils.loadFromEnv(settings);
};
