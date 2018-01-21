const mysql = require('mysql');

let connection;
// MySQL Connection Setup
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "shopping_db" 
    });
}

// Start MySQL connection
connection.connect( err => {
    if (err) {
        console.error(err);
    }
    console.log(`DB and I are connected as id: ${connection.threadId}`);
});

module.exports = connection;