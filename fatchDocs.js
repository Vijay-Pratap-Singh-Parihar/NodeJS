const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
client.connect();
console.log("connection established");
client.db("records").collection("collections").find({}, function (err, result) {
    console.log(result)
});