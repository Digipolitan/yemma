const _ = require('lodash');

class ServiceUnavailableError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

/**
 * Dispatch is responsible to :
 *      - balance load via an old fashion round-robin
 */
class Dispatcher {
    constructor(Instance) {
        this.Instance = Instance;
        this.next = this.next.bind(this);
    }

    /**
     * Basic round robin algorithm fetching the oldest awaken instance
     * @param query the query matching the instance to target (generally a subdomain or the first path component)
     */
    next(query) {
        return this.Instance.find()
            .where(query)
            .sort('updated_at')
            .then(i => i.length > 0 ? i : Promise.reject(new ServiceUnavailableError(503, `service.${query.realm}.unavailable`)))
            .then(getFirst)
            .then(update);

        function getFirst(instances) {
            return instances[0];
        }

        function update(instance) {
            return instance.save();
        }
    }
}

module.exports = Dispatcher;
