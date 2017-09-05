# Yemma

[![build status](https://gitlab.com/digipolitan/badges/yemma/build.svg)](https://gitlab.com/digipolitan/yemma/commits/develop)

### 1. Setup

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

3. Setup your environment
 ```bash
 export REGISTRY_MONGODB_URI=mongodb://localhost:27017/yemma
 export REGISTRY_PORT=6473
```

### 3. Behavior
Yemma waits for instances registering themselves to be able to forward requests to the proper realm.

### 4. Reference
[Yemma](http://dragonball.wikia.com/wiki/King_Yemma) is a Demi-God with unsettling existential implications in the Dragon Ball Series.
All gods in Dragon Ball Z are too busy and not actually caring about anything to keep track of in the **registry** of the dead which is actually Yemma's job.
