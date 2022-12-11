var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoutil = require('./connectDB')

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//allows us to choose between url parsing and body parsing it self however if you write "true" middleware parsing body url will be same.

app.use(express.static('public')); //this ensures app fucntion to be publicly accesible

app.get('/secIndex.html', function (req, res) {
    // res.sendFile(__dirname + '/' + 'secIndex.html');
    res.send('mongoutil');
});

app.post('/request', urlencodedParser, function (req, res) {
    response = {
        first: req.body.first,
        last: req.body.last
    }
    console.log(response);
    res.end(JSON.stringify(response)); // Converts javaScript value in JSON string
});

var server = app.listen(9898, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server chalu hogya hai!!")
});
