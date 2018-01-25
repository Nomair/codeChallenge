var server = require("./server.js");
module.exports = function (app) {
    //Get Collection Name API
    app.get('/api/collectionName/:collection_id',function(req, res)  {
      var collection_id = req.params.collection_id;
    var query = "select NAME from collections WHERE CollectionId=" + collection_id
    server.DBqueriesExc(query, res);
    }),
    //Get Cds List which is related to a certain collection API
    app.get('/api/cds/:collection_id',function(req, res)  {
      var collection_id = req.params.collection_id;
    var query = "select cds.CdId , cds.Title , cds.Capacity, cds.DataUsage , cds.Desribe , collections.NAME , cds.CollectionId from cds JOIN collections ON cds.collectionId = collections.CollectionId WHERE collections.CollectionId=" + collection_id
    server.DBqueriesExc(query, res);
    }),
    //Get Collections List Api
    app.get('/api/collections',function(req, res) {
      var query = "select * from collections";
    server.DBqueriesExc(query, res);
    }),
    //Create Collection List APi
    app.post('/api/create_collection',function(req, res) {
      var NAME = req.body.NAME;
    var Desribe = req.body.Desribe;
    var query = "INSERT INTO collections ( `NAME`, `Desribe`) \n" +
      "VALUES ('" + NAME + "','" + Desribe + "')";
    server.DBqueriesExc(query, res);
    });
}
