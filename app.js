// Requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const exphbs  = require('express-handlebars');

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
    res.render('index', { test });
});

// Starting Express Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});