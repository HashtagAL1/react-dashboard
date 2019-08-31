const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('../config/dbConfig');
const Module = mongoose.model('Module');

router.post('/createModule', (req, res) => {
    const newModule = req.body;
    Module.create(newModule).then((nm) => {
        return res.status(200).json({
            success: true,
            msg: 'Module added successfully'
        });
    })
    .catch((e) => {
        return res.status(500).json({
            success: false,
            msg: 'An error occurred'
        });
    });
});

router.get('/getAll', (req, res) => {
    Module.find({}).then((modules) => {
        return res.status(200).json({
            success: true,
            modules: modules
        });
    });
});

router.get('/getModule/:id', (req, res) => {
    const id = reqparams.id;
    Module.findOne({ _id: id}).then((module) => {
        if (module !== undefined && module !== null) {
            return res.status(200).json({
                success: true,
                msg: 'Module fetched',
                module: module
            });
        } else {
            return res.status(404).json({
                success: false,
                msg: 'No module found'
            });
        }
    })
    .catch((e) => {
        return res.status(500).json({
            success: false,
            msg: 'An error occurred'
        });
    });
});

module.exports = router;