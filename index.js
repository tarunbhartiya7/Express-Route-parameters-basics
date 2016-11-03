/**
 * Created by Tarun on 8/17/2016.
 */
var express = require('express');
var app = express();
var route = require('./route');

app.get('/', route.home);
app.get('/fruits', route.fruits);
app.get('/fruits/:id', route.fruits_id);
app.get('/veg', route.veg);
app.get('/veg/:id', route.veg_id);

var port = 3000;
app.listen(port, function () {
    console.log("Server running on port 3000");
});


