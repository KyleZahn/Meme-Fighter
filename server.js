// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var port = 3000;
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', port);
app.use('/game', express.static(__dirname + '/game'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/index', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, function() {
  console.log('Starting server on port', port);
});


// When a player connects, create new player object with Socket.io id as key
var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
    console.log('player connected');
    players[socket.id] = {
      x: 300,
      y: 300
    };
    console.log(players);
  });
  // On keypress, change player's values
  socket.on('movement', function(data) {
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
  });
});

// Sends updates of the current player's health and positions
setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);