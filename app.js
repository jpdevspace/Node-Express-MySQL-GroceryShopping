// Requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Routing Setup
const exphbs  = require('express-handlebars');

// Using Port 3000 or whatever the default port for the environment is
const port = process.env.PORT || 3000;

// Initializing Express app
const app = express();


// Middleware: Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Midleware: Imported Routes setup
app.use('/', routes);


// Starting Express Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});