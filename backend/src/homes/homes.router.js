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
    .get(controller.homeExists, controller.read)
    .put(controller.update)
    .delete(controller.remove)
    .all(methodNotAllowed);

module.exports = router;
