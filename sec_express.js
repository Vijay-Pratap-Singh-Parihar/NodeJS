var express = require('express');
var app = express();

app.post('/hello', function (req, res) {
    res.send("hello world");
});

app.listen(8000);