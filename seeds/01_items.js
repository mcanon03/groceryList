
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function() {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'ground beef', quantity: '1', unit: 'lb'},
        {id: 2, itemName: 'onion', quantity: '2', unit: ''},
        {id: 3, itemName: 'tomato sauce', quantity: '1', unit: 'oz'},
      ]);
    });
};
