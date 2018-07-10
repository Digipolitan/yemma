module.exports = app => {
    return (socket, data) => {
        return (socket.handshake
            && socket.handshake.query
            && socket.handshake.query.token === app.settings.access_token)
            || Promise.reject(new Error(`invalid issuer ${socket.handshake.address}`));
    };
};

