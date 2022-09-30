const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

fs = require('fs'),
http = require('http'),
PORT = 3000,
PORT2 = 8888;


const cors = require('cors');
app.use(cors());




//Enable CORS for all HTTP methods

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, post, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const httpServer = http.Server(app);

const https = require('https'),
httpsServer = https.createServer(app);
httpServer.listen(PORT, function() {
    console.log(`http Server listening on port: ${PORT}`);
});

httpsServer.listen(PORT2, () => {
    console.log(`Starting htttps server at: ${PORT2}`);
});

app.get('/productfind', require('./routes/read'));
app.post('/productfind1', require('./routes/read1'));
app.post('/productadd', require('./routes/add'));
app.post('/productremove', require('./routes/remove'));
app.post('/productupdate', require('./routes/update'));