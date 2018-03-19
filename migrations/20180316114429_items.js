'use strict';

exports.up = (knex) => {
    return knex.schema.createTable('items', (table) => {
        table.increments('id').primary();
        table.string('itemName');
        table.integer('quantity');
        table.string('unit');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTable('items');
};
