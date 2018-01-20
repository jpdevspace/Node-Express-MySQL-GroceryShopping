const mysql = require('mysql');
const connection = require('./connection.js'); // MySQL Connection

const selectAll = () => {
    let sql = "SELECT * FROM shopping_table";

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        console.log(dataDB);
    });
};

module.exports = selectAll;