'use strict';

const Hapi = require('hapi');

// Creatre a server with a host and port
// host and port are arbitrarily assigned?
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000,
});
