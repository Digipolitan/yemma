const Action = require('idylle').Action;

module.exports = app => {
    const Instance = app.models.Instance;

    class ServiceUnavailableError extends Error {
        constructor(code, message) {
            super(message);
            this.code = code;
        }
    }

    return Action({
        rules: [],
        execute: (context) => {
            const socket = context.socket;

            return Instance
                .findOne()
                .where(context.criteria.where)
                .sort('updated_at')
                .then(i => i || new ServiceUnavailableError(503, `service.${query.realm}.unavailable`))
                .then(update)
                .then(instance => socket.emit('YEMMA_INSTANCE', instance.toJSON()));

            function update(instance) {
                return instance.save();
            }
        }
    })
};
