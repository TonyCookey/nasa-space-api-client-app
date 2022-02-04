const launchesModel = require('../models/launches.model')

function getAllLaunches(req, res) {
    return res.status(200).json(launchesModel.launches)
}

module.exports = {
    getAllLaunches
}