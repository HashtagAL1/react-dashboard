const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5555;
const app = express();

require('./config/dbConfig');

const moduleRouter = require('./routers/module-router');
const truckRouter = require('./routers/truck-router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/modules', moduleRouter);
app.use('/trucks', truckRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})