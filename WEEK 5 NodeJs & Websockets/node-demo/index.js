var express = require('express')
var mongoose = require ('mongoose')
var bodyParser = require('body-parser');
var path = require('path');
mongoose.connect('mongodb://localhost/nodeDemo');

var app = express()

var index = require('./routes/index');



app.use('/', index);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports = app;
