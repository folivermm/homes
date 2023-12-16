const service = require("./homes.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Middleware to check if the home ID exists
async function homeExists(req, res, next) {
    const { id } = req.params;
    const home = await service.readHomeWithRealtor(id);
    if (home) {
        res.locals.homeWithRealtor = home;
        return next(); // Proceed to the next middleware or route handler
    }
}

// List all homes
async function list(req, res) {
    const data = await service.list();
    res.json({ data });
}

// Read a specific home with associated realtor information
async function read(req, res) {
    const homeWithRealtor = res.locals.homeWithRealtor; // Access the home data with realtor from locals
    res.json({ data: homeWithRealtor });
}

// Create a new home
async function create(req, res) {
    const { body } = req;
    const newHome = await service.create(body);
    res.status(201).json({ data: newHome });
}




module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    homeExists: asyncErrorBoundary(homeExists), // Include the homeExists middleware
    create: asyncErrorBoundary(create),
};


