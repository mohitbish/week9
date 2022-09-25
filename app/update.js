const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

const update = function(a,b) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    // Update document where a is 2, set b equal to 1
    collection.updateOne(a
      , { $set: b }, function(err, res) {
        if (err) throw err;
        console.log("Product updated");
      
    });  
}
module. exports = update;