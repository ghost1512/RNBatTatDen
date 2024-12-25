const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const mqtt = require("mqtt");

const app = express();
const port = 3000;

// Cấu hình MySQL
const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Nhannguyen2004!!",
  insecureAuth: true,
  database: "DoorControl"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

(err) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Table created or already exists!");
  }
}

// API Routes
app.get("/get", (req, res) => {
  var sql = "SELECT * FROM DoorLogs ORDER BY id  DESC LIMIT 1";
  con.query(sql, function (err, results) {
    if (err) {
      res.status(500).send("Error retrieving data from database");
    } else {
      res.json(results);
    }
  });
});

app.post("/post", function (req, res) {
  const { device, action } = req.body
  var sql = "insert into DoorLogs(action,AtTime) value(" + action + " , " + AtTime + ")";
  con.query(sql, function (err, results) {
    if (!device || !action) {
      return res.status(400).send("Device and action are required");
    }
  });
})
// Start Server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server is listening at http://%s:%s", host, port)
})
