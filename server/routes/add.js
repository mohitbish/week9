var fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

module.exports = function(product) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    // Insert some documents
    collection.insertOne(products, function(err, res) {
        if (err) throw err;
        console.log("Product Added");
    });
    
}
