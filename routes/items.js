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
            }
        });

        server.route({
            method: 'POST',
            path: '/items',
            handler: async (request, reply) => {
                const { itemName, quantity, unit } = request.payload;
                const newItem = await db('items').insert({ itemName, quantity, unit });
                console.log('hi');
                console.log(request.payload);
                return newItem;
            }
        });
    },
};

