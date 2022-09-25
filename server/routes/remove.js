
var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(req,res,x) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    // Delete document where a is 3
    collection.deleteOne({_id: x}, function(err, result) {
        if (err) throw err;
        console.log("Product deleted");
    });    
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        data = JSON.stringify(docs)
        res.send(data)
      });
}
