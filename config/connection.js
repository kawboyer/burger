// Set up mySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
  });
};

var PORT = process.env.PORT || 3000;

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

applicationCache.addEventListener(PORT, function() {
  console.log("App listening on port id " + PORT);
});

// Export connection for our ORM to use
module.exports = connection;