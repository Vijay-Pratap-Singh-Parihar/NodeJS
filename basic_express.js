var express = require('express');
var app = express();

app.get("/", function (req1, resw2) {
    resw2.send("This is first response")
});

var server = app.listen(8000, function () {
    var host = server.address().address;// function().attribute => ip address of the application runs
    var port = server.address().port; // Port on which app runs
    console.log(host);
    console.log(port);
    console.log("application runs at http://", host, port);
});