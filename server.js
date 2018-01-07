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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
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

//Function to connect to database and execute query
var  executeQuery = function(query,resp){
  if(con.state === 'disconnected'){
    con.connect(function(err) {
      if (err) {
        resp.send(err);
        console.log("Error while connecting database :- " + err);
      }
    });
  }
  // create Request object

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



app.route('/api/cats').get((req, res) => {
  var query ="select * from cds";
executeQuery (query,res);
});


app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204);
});

