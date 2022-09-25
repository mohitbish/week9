const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

const add = function(products) {
    // Get the documents collection
    const db = client.db(dbName);
    const collection = db.collection('products');
    // Insert some documents
    collection.insertMany(products, function(err, res) {
        if (err) throw err;
        console.log("Number of products inserted: " + res.insertedCount);
    });
    
}
module. exports = add