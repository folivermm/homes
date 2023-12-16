const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require('./realtors.controller');

// Route for managing homes
router
    .route("/")
    .get(controller.listRealtors)
    .all(methodNotAllowed);



module.exports = router;
