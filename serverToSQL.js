/* 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'amit1995',
  database : 'geonames',
  insecureAuth : true
});



connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("SELECT geonameid FROM geonames.geoname;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
 */

var mysql = require('mysql');

// Import express module
var express = require("express");

// Define object of express module
var app = express();

// Make database connection to handle 10 concurrent users
var pool = mysql.createPool({
connectionLimit :10,
host : '127.0.0.1',
user : 'root',
password : 'amit1995',
database : 'geonames',
debug : true
});
console.log('debug1')
/* Make pooled connection with a database and read specific records from a table of that
 database */

// Call the function for making connections
app.get("/",function(request,response){-
  handle_database(request,response);
});

function handle_database(request,response) {

  console.log('debug2')
  // Make connection
  pool.getConnection(function(e,connection){
    if (e) {

      console.log('Database not connected')
      //Send error message for unsuccessful connection and terminate
      response.json({"code" : 300, "status" : "Database connection errror"});
      return;
    }

    // Display success message in the terminal
    console.log('Database connected');

    // Read particular records from book table
    connection.query("SELECT geonameid FROM geonames.geoname;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    // Check the connection error occurs or not
    connection.on('error', function(e) {
    response.json({"code" : 300, "status" : "Database connection errror"});
    return;
    });
  });
}

// Listen the connection request on port 5000
app.listen(5000);