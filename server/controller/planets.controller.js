const planetModel = require('../models/planet.model')

function getAllPlanets(req, res) {
    return res.status(200).json([])
}

module.exports = {
    getAllPlanets
}