const mongoose = require('mongoose');
const connectionString = `mongodb://localhost:27017/reactDashboardDB`;

require('../models/module');
require('../models/truck');
require('../models/truckMeasurement');

module.exports = mongoose.connect(connectionString).then(() => {
    console.log('Database ready for use');
});