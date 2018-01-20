// Requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const exphbs  = require('express-handlebars');

// Using Port 3000 or whatever the default port for the environment is
const port = process.env.PORT || 3000;

// Initializing Express app
const app = express();

// GET - Home Route
app.get('/', (req, res) => {
    res.send('working!');
});

// Starting Express Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});