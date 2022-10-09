var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(req,res) {
    var n = req.body.Name;
    var p = req.body.Price;
    var u = req.body.units;
    var d = req.body.Description;

    const product = {Name: n, Price: p, Description: d, units: u}
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    // Insert some documents
    collection.insertOne(product, function(err, result) {
        if (err) throw err;
        res.send(product);
        console.log("Product Added");
        
    });
    
}
