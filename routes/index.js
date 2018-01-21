const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js'); // MySQL Connection


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

// POST - Products route: Creates items into the DB
router.post('/products', (req, res) => {
    let sql = `INSERT INTO shopping_table (item, person) VALUES ("${req.body.item}", "${req.body.person}")`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// DELETE - /Complete route: Delete items from DB
router.delete('/delete/:id', (req, res) => {
    
    let sql = `DELETE FROM shopping_table WHERE id = ${req.params.id}`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        res.send('OK');
    });
});

router.post('/purchased', (req, res) => {

    let sql = `UPDATE shopping_table SET purchased = 1 WHERE id = ${req.body.itemId}`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        res.redirect('/');
    });
})

module.exports = router;