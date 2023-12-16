const service = require("./realtors.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function listRealtors(req, res) {
    const realtors = await service.listRealtors();
    res.json({ data: realtors });
}

module.exports = {
    listRealtors: asyncErrorBoundary(listRealtors),
}