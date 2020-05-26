// Set up MySQL connection.
var mysql = require("mysql2");

var connection;
if (Process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Passw@rd",
  database: "burgers_db"
});
  };
  
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
