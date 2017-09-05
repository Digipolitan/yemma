# Login Chinese Gateway 

[![build status](https://gitlab.com/loginchinese/webservices/gateway/badges/develop/build.svg)](https://gitlab.com/loginchinese/webservices/gateway/commits/develop)

The **LCGateway** is responsible to balance loads among services depending on selected subdomain, 
handle authentication by forwarding authentication calls to the `Auth` service, 
cache responses, 
maintain a registry of available services per realm,

### 1. Setup
 1. First you need to install your dependencies with the `npm i` command.
 2. Then you need to configure your environment variables
 
 ```bash
 export NODE_ENV=development
 export PORT=6473
 export MONGODB_URI=mongodb://localhost:27017/lc-gateway
 export LOADERIO_PATH=loaderio-a8c0a528c69bdf1cfc1e28b6766cdd1a
 ```
 3. Edit your local `/etc/hosts` file
 
 ```bash
    ####################################
    # DEV
    ####################################
    127.0.0.1   localhost.com
    127.0.0.1   auth.localhost.com
    127.0.0.1   admin.localhost.com
    127.0.0.1   learning.localhost.com
    127.0.0.1   auth.lambda.com
    127.0.0.1   admin.lambda.com
 ```
 
### 2. Testing
All your work has to be tested.
You can check what as already been done in the `tests` directory and run them through the `npm test` command.


### 3. Documentation  
Once your gateway started, you will be able to browse its documentation on : `http://localhost:<$PORT>/docs`

### 4. Behavior
The API Gateway waits for instances to register to be able to forward requests to the proper domains.