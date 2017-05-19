var express = require('express')
var app = express()
var router = express.Router()
var message = require('../models/message');

  app.get('/',function (req,res) {
    res.render('messageboard.pug')
  })


  app.post('/',function(req,res){
    message = new message({
      text: "test"
    })
    message.save(function (err) {
      if (err) return handleError(err);

    });
});

  router.get('/', function(req,res){

  })


/*
  app.get('/', function (req,res) {
    res.send("hello world!");
  })

  app.get('/messages',function (req,res) {
    res.send('getting messages');
  })

  app.get('/messages:id',function (req,res) {
    res.send('getting message'+id);
  })

  app.post('/messages', function (req,res) {
    res.send('posting new message');
  })
*/
  app.listen(3000, function () {
    console.log('app is listening');
  })

module.exports= router;
