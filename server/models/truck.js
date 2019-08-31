const mongoose = require('mongoose');
const truckSchema = new mongoose.Schema({
    plate: { type: String, required: true }
});

module.exports = mongoose.model('Truck', truckSchema);