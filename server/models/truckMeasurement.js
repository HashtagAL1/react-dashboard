const mongoose = require('mongoose');
const measurementSchema = new mongoose.Schema({
    truck: { type: mongoose.SchemaTypes.ObjectId, required: true },
    type: { type: String, required: true },
    timestamp: { type: Number, required: true },
    location: { type: Object, required: true },
    volume: { type: Number, required: true }
});

module.exports = mongoose.model('TruckMeasurement', measurementSchema);