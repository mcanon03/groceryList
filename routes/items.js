'use strict';

const db = require('../lib/db.js');

exports.plugin = {
    pkg: require('../package.json'),
    register: (server, options) => {
        server.route({
                method: 'GET',
                path: '/items',
                handler: async (request, reply) => {
                    const items = await db.select().table('items');
                    return items;
                },
            }
        );
    },
};

