var socket = io();


var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}

// Key event listeners, sets var movement
document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});

/* 
Each time a ‘state’ message is received from the server,
the client will clear the canvas and redraw all the players
on the canvas.
*/
var canvas = document.getElementById('stage');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');

socket.on('state', function (players) {
  for (var id in players) {
    var player = players[id];

    // Create and draw image, using play button as test
    var img = new Image();
    img.src = 'game/images/play.png';
    img.onload = function () {
      context.drawImage(img, player.x, player.y);
    }
    // Clears canvas for updating
    context.clearRect(0, 0, 800, 600);
    context.fill();
  };
});


  // Loop to varantly send a player's keyboard input to the server.
  socket.emit('new player');
  setInterval(function () {
    socket.emit('movement', movement);
  }, 1000 / 60);