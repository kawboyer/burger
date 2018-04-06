// Set up mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port:3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;