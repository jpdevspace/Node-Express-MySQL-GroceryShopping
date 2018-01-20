const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js'); // MySQL Connection
//const orm = require('../config/orm.js'); // MySQL CRUD functions 


const test = 'Indeed I am working!!!';

// GET - Home Route
router.get('/', (req, res) => {
    let itemPending = [];   // Holds items not purchased
    let itemComplete = [];  // Holds items already purchased
    
    let sql = "SELECT * FROM shopping_table";   // Query string for MySQL
    connection.query(sql, (err, dataDB) => {
        if (err) throw err;

        dataDB.forEach( item => {   // Checks if item in DB has been purchased already or not
            if(item.purchased == 0) {
                itemPending.push(item);
            } 
            else {
                itemComplete.push(item);
            }
        });
        // Renders view
        res.render('index', { itemPending, itemComplete });
    });
});

// POST - Products route
router.post('/products', (req, res) => {
    let item = req.body.item;
    let person = req.body.person;

    let sql = `INSERT INTO shopping_table (item, person) VALUES ("${item}", "${person}")`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        res.redirect('/');
    });
});

router.post('/complete', (req, res) => {
    let sql = `DELETE FROM shopping_table WHERE id = ${req.body.itemId}`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        res.redirect('/');
    });

    
});

module.exports = router;