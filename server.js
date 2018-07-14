var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Middleware

//support the parsing of application/json
app.use(bodyParser.json())

//some movie data
var movies = [
    {
        "id": 1,
        "name": "The dark knigt"
    },
    {
        "id": 2,
        "name": "Inception"
    }
]

// Routes

// GET /movies
app.get('/movies', function (req, res) {
    res.send(movies);
});

// GET /movies/id
app.get('/movies/:id', function (req, res) {

    var reqId = req.params.id;
    var result;

    movies.forEach(function (movie) {
        if (movie.id == reqId) {
            result = movie;
        }
    });

    if (result) {
        res.send(result);
    }
    else {
        res.sendStatus(404);
    }
});

// POST /movies
app.post('/movies', function (req, res) {

    var movieData = req.body;
    movies.push(movieData);

    res.send(movies);
});

// PUT /movies/id
app.put('/movies/:id', function (req, res) {


})

// DELETE /movies/id
app.delete('/movies/:id', function (req, res) {

});

//listen
var port = 3000;
app.listen(port, function () {
    console.log("listening on port number", port)
});