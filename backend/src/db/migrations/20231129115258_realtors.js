exports.up = function (knex) {
    return knex.schema.createTable("realtors", function (table) {
        table.increments("id").primary();
        table.string("first_name");
        table.string("last_name");
        table.string("company");
        table.string("email");
        table.string("phone");
        table.string("image_url");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("realtors");
};