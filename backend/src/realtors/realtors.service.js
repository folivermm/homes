const knex = require("../db/connection");

function listRealtors() {
    return knex('realtors as r')
        .select('*') // Select all fields
        .orderBy('r.id');
}


module.exports = {
    listRealtors,
};