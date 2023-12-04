const knex = require("../db/connection");

function list() {
    return knex("homes")
        .select("*")
        .orderBy("id");
}

function readHomeWithRealtor(id) {
    return knex('homes as h')
        .select(
            'h.price',
            'h.address',
            'h.registered',
            'h.about',
            'r.image_url',
            'r.first_name',
            'r.last_name',
            'r.email',
            'r.phone'
        )
        .leftJoin('realtors as r', 'h.id', 'r.home_id')
        .where('h.id', id)
        .then((homeWithRealtor) => {
            if (!homeWithRealtor.length) {
                throw { status: 404, message: `Home with ID ${id} not found` };
            }
            return homeWithRealtor[0];
        });
}

function create(homeData) {
    return knex('homes')
        .insert(homeData)
        .returning('*')
        .then((createdHomes) => createdHomes[0]);
}

module.exports = {
    list,
    readHomeWithRealtor,
    create
};