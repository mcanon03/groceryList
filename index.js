'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
});

// Load routes
server.register([
    require('./routes/items'),
]).then(() => {
    // Start the server --> .then = promise, not a callback
    server.start()
    .then(() => {
        console.log('The server has started. You did it fam!');
    }).catch((err) => {
        console.log('You dun messed up Aaron', err);
        throw err;
    });
});


