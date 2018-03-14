'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
// host and port are arbitrarily assigned?
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
});

// Start the server
server.start()
.then(() => {
    console.log('The server has started. You did it fam!');
}).catch((err) => {
    console.log('You dun fucked up Aaron', err);
    throw err;
});
