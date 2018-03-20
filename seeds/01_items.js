
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function() {
      // Inserts seed entries
      return knex('items').insert([
        {id: knex.raw('uuid_generate_v4()'), itemName: 'ground beef', quantity: '1', unit: 'lb'},
        {id: knex.raw('uuid_generate_v4()'), itemName: 'onion', quantity: '2', unit: ''},
        {id: knex.raw('uuid_generate_v4()'), itemName: 'tomato sauce', quantity: '1', unit: 'oz'},
      ]);
    });
};
