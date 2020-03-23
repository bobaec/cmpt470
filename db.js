var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.232.24.19",
  user: "test_remote",
  password: "test_remote",
  port: 3306,
  database:"cmpt470"
});

module.exports = con;