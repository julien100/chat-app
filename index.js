var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });



  http.listen(80,'192.168.178.45', function(){
    console.log('listening on *:3000');
  });

  io.on('connection', function(socket){
    console.log('connected');
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });
