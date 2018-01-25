const express = require('express');
const cors = require('cors')
const app = express();
bodyParser = require('body-parser');

app.listen(8000, () => {
  console.log('Server started!');
});
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Credentials', true);
 res.header("Access-Control-Allow-Origin", "*","http://localhost/api/deletecd");
  res.header('Access-Control-Allow-Methods', "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

// Body Parser Middleware
app.use(bodyParser.json());
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
module.exports.DBqueriesExc =
//Function to connect to database and execute query
  executeQuery = function(query,resp){
  if(con.state === 'disconnected'){
    con.connect(function(err) {
      if (err) {
        resp.send(err);
        console.log("Error while connecting database :- " + err);
      }
    });
  }
  // query to the database
  con.query(query, function (err, res) {
    if (err) {
      console.log("Error while querying database :- " + err);
      resp.send(err);
    }else{
      // console.log("Result :- " + res);
       resp.send(res);
    }
  });
};

// import Cds and Collections Apis Classes
require('./CdsApis.js')(app);
require('./CollectionsApis.js')(app);
