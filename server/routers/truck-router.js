const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('../config/dbConfig');
const Truck = mongoose.model('Truck');
const TruckMeasurement = mongoose.model('TruckMeasurement');

router.get('/getAll', (req, res) => {
    Truck.find({}).then((trucks) => {
        return res.status(200).json({
            success: true,
            msg: 'Trucks fetched',
            trucks: trucks
        });
    })
    .catch((e) => {
        return res.status(500).json({
            success: false,
            msg: 'An error occurred'
        });
    });
});

router.post('/createTruck', (req, res) => {
    const newTruck = req.body;

    Truck.findOne({ plate: newTruck.plate }).then((t) => {
        if (t !== undefined && t !== null) {
            return res.status(200).json({
                success: false,
                msg: 'A truck with this plate already exists'
            });
        }

        Truck.create(newTruck).then((nt) => {
            return res.status(200).json({
                success: true,
                msg: 'Truck created successfully',
                newTruck: nt
            });
        })
        .catch((e) => {
            return res.status(500).json({
                success: false,
                msg: 'An error occurred'
            });
        });
    });
});

router.post('/addMeasurement', (req, res) => {
    const measurement = req.body;

    TruckMeasurement.create(measurement).then((nm) => {
        return res.status(200).json({
            success: true,
            msg: 'Measurement added successfully',
            meassurement: nm
        });
    })
    .catch((e) => {
        return res.status(500).json({
            success: false,
            msg: 'An error occurred'
        });
    });
});

router.get('/getMeasurements/:truckPlate/:from/:to', (req, res) => {
    const truckPlate = req.params.truckPlate
    const from = req.params.from;
    const to = req.params.to;

    TruckMeasurement.find({ plate: truckPlate }).then((measurements) => {
        let result = [];
        result = measurements.filter(m => m.timestamp >= from && m.timestamp <= to);
        return res.status(200).json({
            success: true,
            msg: 'Measurements fetched',
            measurements: result
        });
    });
});

module.exports = router;