exports.up = function (knex) {
    return knex.schema.createTable("realtors", function (table) {
        table.increments("id").primary();
        table.string("first_name");
        table.string("last_name");
        table.string("company");
        table.string("email");
        table.string("phone");
        table.string("image_url");
        table
            .integer("home_id")
            .unsigned()
            .references("id")
            .inTable("homes")
            .onDelete("CASCADE") // Optional: Define the onDelete behavior
            .onUpdate("CASCADE"); // Optional: Define the onUpdate behavior
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("realtors");
};
