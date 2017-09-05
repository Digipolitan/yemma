module.exports = (app) => {
    const instances = app.actions.instances;

    return Action({
        execute: context => instances.remove({
            data: {
                ip: context.HTTP.request.ip
            }
        })
            .then(context.noContent)
    });
};
