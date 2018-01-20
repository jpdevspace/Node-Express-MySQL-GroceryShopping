const express = require('express');
const router = express.Router();
const connection = require('../config/connection.js'); // MySQL Connection
//const orm = require('../config/orm.js'); // MySQL CRUD functions 


const test = 'Indeed I am working!!!';

// GET - Home Route
router.get('/', (req, res) => {

    let itemPending = [];
    let itemComplete = [];
    
    let sql = "SELECT * FROM shopping_table";
    connection.query(sql, (err, dataDB) => {
        if (err) throw err;

        dataDB.forEach( item => {
            if(item.purchased == 0) {
                itemPending.push(item);
            } 
            else {
                itemComplete.push(item);
            }
        });

        res.render('index', { itemPending, itemComplete });
    });

    //console.log(orm.selectAll());
    //console.log(products);
    
});

module.exports = router;