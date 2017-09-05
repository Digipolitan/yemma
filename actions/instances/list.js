module.exports = (app) => {
    const Instance = app.models.Instance;

    return Action({
        execute: context => Instance
            .find()
            .where(context.criteria.where)
            .skip(context.criteria.skip)
            .limit(context.criteria.limit)
            .sort(context.criteria.sort)
    });
};
