const mysql = require('mysql');
const connection = require('./connection.js'); // MySQL Connection

// Function to display all the data in db
const selectAll = () => {
    let sql = "SELECT * FROM shopping_table";

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        console.log(dataDB);
    });
};

// Function to insert new items into db
const insertOne = (item, person) => {
    let sql = `INSERT INTO shopping_table (item, person) VALUES ("${item}", "${person}")`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        return;
    });
};

// Function to update existing items in db
const updateOne = (id) => {
    let sql = `UPDATE shopping_table SET purchased = 1 WHERE id = ${id}`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        return;
    });
};

// Function to remove an item from the db
const removeOne = (id) => {
    let sql = `DELETE FROM shopping_table WHERE id = ${id}`;

    connection.query(sql, (err, dataDB) => {
        if (err) throw err;
        return;
    });
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
    removeOne: removeOne
}

