const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let db_url = 'mongodb://anu:qburst123@ds129393.mlab.com:29393/bond007';
mongoose.connect(db_url);
//for changing the default mongo promise
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//including the routes
const first = require('./routes/first.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/first',first);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});