const { PORT = 5001 } = process.env;

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
    .latest()
    .then((migrations) => {
        console.log("migrations", migrations);
        app.listen(PORT, listener);
    })
    .catch(console.error);


// const app = require("./app");
// const knex = require("./db/connection");

// const PORT = process.env.PORT || 5001;
// knex.migrate
//     .latest()
//     .then((migrations) => {
//         console.log("Migrations:", migrations);
//         const server = app.listen(PORT, () => {
//             console.log(`Server is running on Port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Error running migrations:", error);
//         process.exit(1);
//     });
