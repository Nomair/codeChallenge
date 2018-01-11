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
  // query to the database
  con.query(query, function (err, res) {
 //   console.log(query);
    if (err) {
      console.log("Error while querying database :- " + err);
      resp.send(err);
    }else{
      // console.log("Result :- " + res);
       resp.send(res);
    }
  });
};



app.route('/api/collectionName/:collection_id').get((req, res) => {
  var collection_id = req.params.collection_id;
var query ="select NAME from collections WHERE CollectionId="+ collection_id
executeQuery (query,res);
});

app.route('/api/cds/:collection_id').get((req, res) => {
  var collection_id = req.params.collection_id;
  var query ="select cds.CdId , cds.Title , cds.Capacity, cds.DataUsage , cds.Desribe , collections.NAME , cds.CollectionId from cds JOIN collections ON cds.collectionId = collections.CollectionId WHERE collections.CollectionId="+ collection_id
executeQuery (query,res);
});


app.route('/api/collections').get((req, res) => {
  var query ="select * from collections";
executeQuery (query,res);
});

app.route('/api/createcd').post((req, res) => {
  var Title = req.body.Title;
  var Capacity = req.body.Capacity;
  var DataUsage = req.body.DataUsage;
  var CollectionId = req.body.CollectionId;
  var Desribe = req.body.Desribe;
  var query ="INSERT INTO cds (`CollectionId`, `Title`, `Capacity`, `DataUsage`, `Desribe`) \n" +
    "VALUES ("+CollectionId+",'"+Title+"',"+Capacity+","+DataUsage+",'"+Desribe+"')";
   executeQuery (query,res);

});

app.route('/api/create_collection').post((req, res) => {
  var NAME = req.body.NAME;
var Desribe = req.body.Desribe;
var query ="INSERT INTO collections ( `NAME`, `Desribe`) \n" +
  "VALUES ('"+NAME+"','"+Desribe+"')";
executeQuery (query,res);

});




app.route('/api/deletecd').post((req, res) => {
  var cd_id = req.body.id;

var query ="DELETE FROM `cds` WHERE CdId ="+ cd_id;
executeQuery (query,res);

});

app.route('/api/updatecd').post((req, res) => {
  var CdId = req.body.id;
  var Title = req.body.Title;
  var Capacity = req.body.Capacity;
  var DataUsage = req.body.DataUsage;
  var CollectionId = req.body.CollectionId;
  var Desribe = req.body.Desribe;
  var query ="UPDATE `cds` SET `CollectionId`="+CollectionId+",`Title`='"+Title+"',`Capacity`="+Capacity+",`DataUsage`="+DataUsage+",`Desribe`='"+Desribe+"' WHERE  CdId ="+CdId;
  executeQuery (query,res);

  });
app.route('/api/read_one_cd/:cd_id').get((req, res) => {
   var CdId = req.params.cd_id;
  var query ="select cds.CdId , cds.CollectionId , cds.Title , cds.Capacity, cds.DataUsage , cds.Desribe , collections.NAME from cds JOIN collections ON cds.CollectionId = collections.CollectionId WHERE CdId ="+CdId;
  executeQuery (query,res);
});

app.route('/api/count_cds/:collection_id').get((req, res) => {
  var collection_id = req.params.collection_id;
var query ="SELECT COUNT(*) as count FROM `cds` WHERE CollectionId="+ collection_id;
executeQuery (query,res);
});

