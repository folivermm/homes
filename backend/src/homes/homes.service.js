const knex = require("../db/connection");

function list() {
    return knex("homes")
        .select("*")
        .orderBy("id");
}

function readHomeWithRealtor(id) {
    return knex('homes as h')
        .select(
            'h.id',
            'h.price',
            'h.image_url',
            'h.address',
            'h.about',
            'h.registered',
            'r.id as realtor_id',
            'r.first_name',
            'r.last_name',
            'r.email',
            'r.phone',
            'r.image_url as realtor_image_url'
        )
        .leftJoin('realtors as r', 'h.realtor_id', 'r.id')
        .where('h.id', id)
        .then((homeWithRealtor) => {
            if (!homeWithRealtor.length) {
                throw { status: 404, message: `Home with ID ${id} not found` };
            }
            return homeWithRealtor[0];
        });
}

// function create(homeData) {
//     return knex('homes')
//         .insert(homeData)
//         .returning('*')
//         .then((createdHomes) => createdHomes[0]);
// }

function create(homeData) {
    return knex.transaction(async (trx) => {
        try {
            // Check if the provided 'realtor_id' exists in the 'realtors' table
            const realtorExists = await trx("realtors")
                .where("id", homeData.realtor_id)
                .first();

            if (!realtorExists) {
                throw new Error(`Realtor with ID ${homeData.realtor_id} not found`);
            }

            // Insert home data into the 'homes' table
            const [homeId] = await trx("homes")
                .insert(homeData)
                .returning("id");

            // Retrieve the created home data
            const createdHome = await trx("homes")
                .select("*")
                .where("id", homeId)
                .first();

            return createdHome;
        } catch (error) {
            throw error;
        }
    });
}

function update(id, updatedData) {
    return knex.transaction(async (trx) => {
        try {
            // Check if the provided 'realtor_id' exists in the 'realtors' table
            const realtorExists = await trx("realtors")
                .where("id", updatedData.realtor_id)
                .first();

            if (!realtorExists) {
                throw new Error(`Realtor with ID ${updatedData.realtor_id} not found`);
            }

            // Update home data in the 'homes' table
            await trx("homes")
                .where({ id: id })
                .update(updatedData);

            // Retrieve the updated home data
            const updatedHome = await trx("homes")
                .select("*")
                .where({ id: id })
                .first();

            return updatedHome;
        } catch (error) {
            throw error;
        }
    });
}


function remove(id) {
    return knex("homes")
        .where({ id })
        .del()
        .returning("*");
}

module.exports = {
    list,
    readHomeWithRealtor,
    create,
    update,
    remove,
};


