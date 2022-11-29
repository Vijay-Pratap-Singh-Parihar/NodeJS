const mysql = require('mysql');//import mysql module for db connection
const mongo = require('mongodb');
// const redis = require('redis');
//specific to your project DB
var con = mysql.createConnection({
    host: "localhost",//your project hostname to which your system has access
    user: "yourusername",//username to connect with the db
    password: "yourpassword"//password to connect to DB
});

var con1 = mongo.createConnection({
    host: "localhost",//your project hostname to which your system has access
    user: "yourusername",//username to connect with the db
    password: "yourpassword"//password to connect to DB
});