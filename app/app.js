const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);


//linking operations
const add = require('./add.js');
const remove = require('./remove.js');
const read = require('./read.js');
const update = require('./update.js');

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    //add products
    products = [
        {Id : 1, Name:"Bread", Description: "wholewheat", Price: 4.5, units: 20},
        {Id : 2, Name:"Milk", Description: "Fullcream", Price: 2.5, units: 40},
        {Id : 3, Name:"Rice", Description: "Brown", Price: 1.5, units: 30},
        {Id : 4, Name:"Water", Description: "Spring", Price: 1.5, units: 50}
    ]
    add(products);

    //read products
    read();

    //remove products
    dproduct = {Name:"Water"};
    remove(dproduct);

    //update products
    a = {Name: "Milk"};
    b = {Price: 2, units: 30 };
    update(a,b);

    client.close();
});

