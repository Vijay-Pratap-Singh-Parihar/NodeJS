const MongoClient = require('mongodb').MongoClient; // mongodb-> module which we are using in nodejs
const url = "mongodb://localhost:27017"; //localhost url from where the code is running

MongoClient.connect(url, function (err, db) {
    if (err)
        throw (err);
    console.log("connected with the database.");
    db.close();
});

