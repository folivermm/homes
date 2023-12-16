exports.up = function (knex) {
    return knex.schema.createTable('homes', function (table) {
        table.increments('id').primary();
        table.string('price');
        table.string('image_url');
        table.string('address');
        table.text('about');
        table.timestamp('registered');
        table.integer('realtor_id').unsigned()
        table
            .foreign('realtor_id')
            .references('id')
            .inTable('realtors')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('homes');
};
