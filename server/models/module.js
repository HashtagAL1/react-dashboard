const mongoose = require('mongoose');
const moduleSchema = new mongoose.Schema({
    description: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: Object, required: true },
    volume: { type: Number, default: 0 },
    temperature: { type: Number, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Module', moduleSchema);