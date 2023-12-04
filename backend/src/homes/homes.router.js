const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require('./homes.controller');

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:id")
    .get(controller.homeExists, controller.read) // Use the homeExists middleware here
    .all(methodNotAllowed);

module.exports = router;
