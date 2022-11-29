const mysql = require('mysql');
const mongo = require('mongo');

var con = mysql.connect({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

var con1 = mongo.connect({
    host: "localhost",
    user: "youusername",
    password: "yourpassword",
    database: "mongo"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";


    //Users : Name=q,Pid:12;
    //Product: Name:Pen, ProductId=12;
    //ON Users.Pid=Product.ProductId(12=12)

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});




// // CHAT SHARED BY SIR not part of code please ignore
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// // for collection in mongodb
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


// Tanmay yadav20:48
// mongoose.connect('mongodb://localhost:27017/myapp');
// just use this and add callback to get confirm db is connected