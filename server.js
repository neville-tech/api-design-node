// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();

var jsonData = { count: 12, message: 'hey' };

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html", function (err) {
        if (err) {
            console.log("error occurred while sending the file..", err)
        }
    })
});

app.get('/data', function (req, res) {
    //res.send(jsonData);
    res.json(jsonData);
});

var port = 3000;
app.listen(port, function () {
    console.log("listening on port number", port)
})