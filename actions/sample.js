/**
 * The idylle app will be automatically injected into your nodejs action module.
 * You can access your models, scripts or other things
 * from the app (i.e : const my_model = app.models.my_model)
 */
module.exports = app => {
    /**
     * This is an action.
     * Basically, an action is a promise that manage few concepts like:
     *  > rules:    functions that will be used to validate the context before executing an action.
     *  > execute:  core of an action, use to treat the domain related to an action, generally communicating with an ORM/ODM.
     *  > cache:    attach a cache concept to the action (settings, gettings, busting), read the documentation for more.
     */
    return Action({
        cache: {
            set: ['hello'],
        },
        rules: [
            context => (context.HTTP.request.query && context.HTTP.request.query.name)
                ? (context.HTTP.request.query.name.length > 3)
                    ? Promise.resolve()
                    : context.error(400, 'name too short')
                : Promise.resolve()
        ],
        execute: context => {
            console.log('action called!');
            return Promise.resolve(`Hello, ${context.HTTP.request.query && context.HTTP.request.query.name || 'world'}`)
        }
    });
};

// Try
// http://localhost:8080/hello                  => 200 with 'hello, world'
// http://localhost:8080/hello?name=your_name   => 200 with 'hello, your_name'
// http://localhost:8080/hello?name=inv         => 400 with 'name too short'