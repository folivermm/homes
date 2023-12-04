const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const morgan = require('morgan');
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const HomesRouter = require("./homes/homes.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use("/homes", HomesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;







// const express = require("express");
// const cors = require("cors");
// const knex = require("./db/connection"); // Import your database connection

// if (process.env.USER) require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5001; // Set the port for your server

// app.use(cors());
// app.use(express.json());

// // Define your API routes here
// // Example:
// // app.get("/", (req, res) => {
// //     res.json({ message: "Welcome to your Express.js backend!" });
// // });
// app.user("/homes")

// module.exports = app;
