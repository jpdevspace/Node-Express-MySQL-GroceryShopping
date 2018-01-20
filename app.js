// Requiring modules
const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql');
const exphbs  = require('express-handlebars');
//const connection = require('./config/connection.js'); // MySQL Connection
const orm = require('./config/orm.js');

// Using Port 3000 or whatever the default port for the environment is
const port = process.env.PORT || 3000;


// Initializing Express app
const app = express();


// Middleware: Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const test = 'Indeed I am working!!!'

// GET - Home Route
app.get('/', (req, res) => {
    console.log(orm());
    res.render('index', { test });
});

// Starting Express Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});