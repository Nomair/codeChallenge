var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Collections(\n" +
    "    CollectionId INT AUTO_INCREMENT PRIMARY KEY,\n" +
    "    NAME VARCHAR(255),\n" +
    "    Desribe VARCHAR(500)\n" +
    ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Collections created");
  });
  sql = "CREATE TABLE Cds(\n" +
    "    CdId INT AUTO_INCREMENT PRIMARY KEY,\n" +
    "    CollectionId INT NOT NULL,\n" +
    "    FOREIGN KEY(CollectionId) REFERENCES Collections(collectionId),\n" +
    "    Title VARCHAR(255),\n" +
    "    Capacity FLOAT,\n" +
    "    DataUsage FLOAT,\n" +
    "    Desribe VARCHAR(500)\n" +
    ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Cds created");
  });


  console.log("Start!");
  sql = "INSERT INTO Collections(NAME, Desribe)\n" +
    "VALUES('Music', 'ororoororoororooro'),('Videos', 'rerererrrererer'),('Games', 'rarararararararar');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("3 record inserted");
  });
  sql = "INSERT INTO Cds(\n" +
    "    CollectionId,\n" +
    "    Title,\n" +
    "    Capacity,\n" +
    "    DataUsage,\n" +
    "    Desribe\n" +
    ")\n" +
    "VALUES(\n" +
    "    1,\n" +
    "    'Vivaldi',\n" +
    "    700,\n" +
    "    650,\n" +
    "    'listen to four season it is an epic'\n" +
    "),(\n" +
    "    2,\n" +
    "    'Just Like Heaven',\n" +
    "    700,\n" +
    "    695,\n" +
    "    'It is awesome trust me'\n" +
    "),(3, 'Pes', 700, 340, 'pff');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("another 3  record inserted");
  });
});

