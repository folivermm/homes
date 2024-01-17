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
    .put(controller.update)
    .all(methodNotAllowed);


module.exports = router;
