/**
 * @name Subscribe
 * @description
 * Used by micro-services instances to declare themselves to the registry.
 * Also used to renew their ttl in the registry database.
 *
 * Algorithm:
 *      First checks if the registering instance does not already exist in the registry
 *      If so, just create it.
 *      Else update it.
 */
class InstanceExistsError extends Error {
}

module.exports = app => Action({
    rules: [
        context => (context.data.realm && context.data.port && context.data.access_token) || context.error(400, 'missing.data')
    ],
    execute: (context) => {
        const Instance = app.models.Instance;
        const address = context.data.address || context.HTTP.request.ip;

        return findInstance()
            .then(i => i.length === 0 || Promise.reject(new InstanceExistsError()))
            .then(create)
            .catch(InstanceExistsError, update);

        function findInstance() {
            return Instance
                .find()
                .where({
                    $and: [
                        { address },
                        { port: context.data.port }
                    ]
                });
        }

        function create() {
            return Instance
                .create({
                    realm: context.data.realm,
                    address,
                    timeout: context.data.timeout || app.settings.dispatch_timeout,
                    port: context.data.port,
                    access_token: context.data.access_token
                });
        }

        function update() {
            return Instance
                .update(
                    {
                        address,
                        port: context.data.port
                    },
                    {
                        timeout: context.data.timeout || app.settings.dispatch_timeout,
                        realm: context.data.realm
                    }
                );
        }
    }
});
