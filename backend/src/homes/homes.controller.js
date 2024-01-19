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

async function update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const updatedHome = await service.update(id, body);
    res.json({ data: updatedHome });
}


async function canDeleteHome(req, res, next) {
    const { id } = req.params;
    const homes = await service.list(); // Await the list function

    if (!id || isNaN(id) || parseInt(id) <= 8) {
        return next({ status: 400, message: 'Cannot delete the first 9 homes.' });
    }

    const home = homes.find((h) => h.id === parseInt(id));
    if (!home) {
        return next({ status: 404, message: `Home with ID ${id} not found.` });
    }

    next();
}

// Delete a specific home
async function remove(req, res) {
    const { id } = req.params;
    await service.remove(id);
    res.sendStatus(204);
}
// async function remove(req, res) {
//     const { id } = req.params;
//     const { homeWithRealtor } = res.locals; 
//     if (!homeWithRealtor) {
//         return res.status(404).json({ message: `Home with ID ${id} not found.` });
//     }
//     await service.remove(id);
//     res.sendStatus(204); 
// }


module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    homeExists: asyncErrorBoundary(homeExists), // Include the homeExists middleware
    create: asyncErrorBoundary(create),
    update: asyncErrorBoundary(update),
    remove: [asyncErrorBoundary(canDeleteHome), asyncErrorBoundary(remove)],
};


