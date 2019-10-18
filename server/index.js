const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5555;
const app = express();

require('./config/dbConfig');

const moduleRouter = require('./routers/module-router');
const truckRouter = require('./routers/truck-router');
const otherRouter = require('./routers/other');

//app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// });

app.use('/modules', moduleRouter);
app.use('/trucks', truckRouter);
app.use('/other', otherRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})