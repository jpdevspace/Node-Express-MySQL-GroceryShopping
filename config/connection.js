const mysql = require('mysql');

// MySQL Connection Setup
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shopping_db" 
});

// Start MySQL connection
connection.connect( err => {
    if (err) {
        console.error(err);
    }
    console.log(`DB and I are connected as id: ${connection.threadId}`);
});

module.exports = connection;