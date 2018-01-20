// Requiring modules
const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const routes = require('./routes'); // Routing Setup

// Using Port 3000 or whatever the default port for the environment is
const port = process.env.PORT || 3000;

// Initializing Express app
const app = express();

// Middleware: Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware: Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Middleware: Folder to serve static files from
app.use(express.static('public'));

// Midleware: Imported Routes setup
app.use('/', routes);


// Starting Express Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});