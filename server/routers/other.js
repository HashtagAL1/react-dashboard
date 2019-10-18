const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('../config/dbConfig');
const Truck = mongoose.model('Truck');
const TruckMeasurement = mongoose.model('TruckMeasurement');
const Module = mongoose.model('Module');

router.get('/dashboardData', (req, res) => {
    let result = {
        modules: [],
        avgVolumeNow: 0,
        activeTrucks: 3,
        avgVolumeLastWeek: 30,
        truckDistanceToday: 15000,
        truckDistanceLastWeek: 15000000
    };
    Module.find({}).then((modules) => {
        for (let m of modules) {
            result.avgVolumeNow += m.volume;
        }
        result.avgVolumeNow /= modules.length;
        result.modules = modules;

        return res.status(200).json({
            success: true,
            message: 'data successfully fetched',
            result: result
        });
    });
})


module.exports = router;