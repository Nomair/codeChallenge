//Cds Appis
var server = require("./server.js");
module.exports = function (app) {
  //Cds Count Api
  app.get('/api/count_cds/:collection_id', function(req, res) {
    var collection_id = req.params.collection_id;
    var query ="SELECT COUNT(*) as count FROM `cds` WHERE CollectionId="+ collection_id;
    server.DBqueriesExc(query,res);
  }),
  //Cd details Api
  app.get('/api/read_one_cd/:cd_id' ,function(req, res){
    var CdId = req.params.cd_id;
    var query ="select cds.CdId , cds.CollectionId , cds.Title , cds.Capacity, cds.DataUsage , cds.Desribe , collections.NAME from cds JOIN collections ON cds.CollectionId = collections.CollectionId WHERE CdId ="+CdId;
    server.DBqueriesExc (query,res);
  }),
  //Create cd Api
  app.post('/api/createcd', function(req, res) {
    var Title = req.body.Title;
    var Capacity = req.body.Capacity;
    var DataUsage = req.body.DataUsage;
    var CollectionId = req.body.CollectionId;
    var Desribe = req.body.Desribe;
    var query = "INSERT INTO cds (`CollectionId`, `Title`, `Capacity`, `DataUsage`, `Desribe`) \n" +
      "VALUES (" + CollectionId + ",'" + Title + "'," + Capacity + "," + DataUsage + ",'" + Desribe + "')";
    server.DBqueriesExc(query, res);

  }),
  //Delete Cd Api
  app.post('/api/deletecd',function(req, res) {
    var cd_id = req.body.id;
    var query = "DELETE FROM `cds` WHERE CdId =" + cd_id;
    server.DBqueriesExc(query, res);

  }),
  //Update Cd API
  app.post('/api/updatecd',function(req, res){
    var CdId = req.body.id;
    var Title = req.body.Title;
    var Capacity = req.body.Capacity;
    var DataUsage = req.body.DataUsage;
    var CollectionId = req.body.CollectionId;
    var Desribe = req.body.Desribe;
    var query = "UPDATE `cds` SET `CollectionId`=" + CollectionId + ",`Title`='" + Title + "',`Capacity`=" + Capacity + ",`DataUsage`=" + DataUsage + ",`Desribe`='" + Desribe + "' WHERE  CdId =" + CdId;
    server.DBqueriesExc(query, res);
  })
}
