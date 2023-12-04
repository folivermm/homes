exports.seed = function (knex) {
  // Deletes ALL existing entries in the 'realtors' table
  return knex('realtors').del()
    .then(function () {
      // Inserts seed entries into the 'realtors' table
      return knex('realtors').insert([
        {
          // "id": 10,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Romero",
          "last_name": "Soto",
          "company": "JASPER",
          "email": "romero.soto@jasper.net",
          "phone": "+1 (963) 406-2309",
          "home_id": 1
        },
        {
          // "id": 20,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Sanford",
          "last_name": "Huffman",
          "company": "NATIONS",
          "email": "sanford.huffman@nations.co.uk",
          "phone": "+1 (903) 479-2360",
          "home_id": 2
        },
        {
          // "id": 30,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Rowe",
          "last_name": "Roman",
          "company": "MAXEMIA",
          "email": "rowe.roman@maxemia.me",
          "phone": "+1 (862) 498-2158",
          "home_id": 3
        },
        {
          // "id": 40,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Beulah",
          "last_name": "Mcintosh",
          "company": "ZANYMAX",
          "email": "beulah.mcintosh@zanymax.name",
          "phone": "+1 (903) 542-3708",
          "home_id": 4
        },
        {
          // "id": 50,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Beard",
          "last_name": "Chase",
          "company": "ARCHITAX",
          "email": "beard.chase@architax.info",
          "phone": "+1 (916) 507-2595",
          "home_id": 5
        },
        {
          // "id": 60,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Richards",
          "last_name": "Campos",
          "company": "KONNECT",
          "email": "richards.campos@konnect.us",
          "phone": "+1 (840) 418-2947",
          "home_id": 6
        },
        {
          // "id": 70,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Brandy",
          "last_name": "Rivas",
          "company": "SNORUS",
          "email": "brandy.rivas@snorus.com",
          "phone": "+1 (985) 557-2964",
          "home_id": 7
        },
        {
          // "id": 80,
          "image_url": "http://placehold.it/32x32",
          "first_name": "Fulton",
          "last_name": "Atkinson",
          "company": "HOMETOWN",
          "email": "fulton.atkinson@hometown.biz",
          "phone": "+1 (829) 443-2323",
          "home_id": 8
        }
      ]);
    });
};
