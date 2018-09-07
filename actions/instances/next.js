const Action = require('idylle').Action;

module.exports = app => {
    const Instance = app.models.Instance;

    return Action({
        rules: [],
        execute: (context) => {
            console.log('> Fetching instance for', context.criteria.where.realm);

            return Instance
                .findOne()
                .where(context.criteria.where)
                .sort('updated_at')
                .then(i => i || context.error(503, `service.${context.criteria.where.realm}.unavailable`))
                .then(update);

            function update(instance) {
                return instance.save();
            }
        }
    })
};
