var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(req, res) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    
    console.log(req.body)
    // Find some documents
    collection.find({Name: req.body.Name}).toArray(function(err, docs) {
      assert.equal(err, null);
      data = JSON.stringify(docs)
      res.send(data);
    });
    
}