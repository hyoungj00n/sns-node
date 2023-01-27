const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "37e747937e",
  database: "sns",
});

db.connect();

module.exports = db;