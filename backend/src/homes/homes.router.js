// homes.routes.js

const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require('./homes.controller');

// Route for managing homes
router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:id")
    .get(controller.homeExists, controller.read) // Use the homeExists middleware here
    .all(methodNotAllowed);

// Route for listing realtors
// router
//     .route("/realtors")
//     .get(controller.listRealtors); // Add this route to list realtors

module.exports = router;
