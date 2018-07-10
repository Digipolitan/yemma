const io = require('socket.io-client');
const client = io("http://localhost:8080?token=44984891");

client.on('connect', () => {
    console.log('> connected.', client.id);
});

client.on('disconnect', reason => {
    console.log('> reason:', reason);
});

setInterval(() => {
    client.emit('/registry/subscribe', {
        extraHeaders: {
            token: 'token'
        },
        data: {
            port: 8080,
            access_token: 'qwerthfgd',
            realm: 'auth-service'
        }
    })
}, 3000);
