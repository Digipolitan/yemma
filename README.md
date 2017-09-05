# Yemma
[![pipeline status](https://gitlab.com/digipolitan/yemma/badges/master/pipeline.svg)](https://gitlab.com/digipolitan/yemma/commits/master)

In a Micro-Service Architecture, you have to handle the proxying, the load, and at least failures.
One of the mandatory component is a `Registry`.

The main goal of a `Registry` is to keep track of all services (servers with accessible endpoints) for a specific domain.

With **Yemma** those domains are called `Realms` meaning each services who wants to register itself to the registry has to submit his address (either a `hostname` or an `ip`, a `port` and generally an `access_token` to ensure only the registry is able to contact the service).

### Setup

1. In a classic nodeJS project, install the dependency.

 ```bash
 npm i --save yemma
 ```

2. In your main nodeJS file application (typically index.js) use it like so :

 ```javascript
 const registry = require('yemma');

 registry
     .on(Core.events.started, core => console.log(`Registry listening on port ${core.settings.port}`))
     .start();
 ```

3. Setup your environment:

 ```bash
 export REGISTRY_DB_URI=mongodb://localhost:27017/yemma
 export REGISTRY_PORT=6473
```

### Behavior
Yemma waits for instances registering themselves to be able to forward requests to the proper realm.
To contact an instance you can query the `dispatcher` :

```javascript
registry
    .dispatcher
    .next({ realm: 'user-service' })
    .request({
        method: 'GET',
        uri: '/users'
    })
    .then(response => { .... })
```

### Reference
[Yemma](http://dragonball.wikia.com/wiki/King_Yemma) is a Demi-God with unsettling existential implications in the Dragon Ball Series.
All gods in Dragon Ball Z are too busy and not actually caring about anything to keep track of in the **registry** of the dead which is actually Yemma's job.
