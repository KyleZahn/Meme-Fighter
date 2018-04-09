# Meme-Fighter
A 2D fighting game inspired by Street Fighter. Utilizes Node.js, Express, and Websockets on the back-end to establish and maintain a connection between two players.

(Work in progress)

## How it works
Characters are rendered as divs on the index.html page.
```
<div id="stage" class="stage">
  <div class="doge dogeStance">
  </div>
</div>
```

.js files are loaded to monitor keyboard input.
Movement is rendered by the adding of CSS keyframes.
```
<script type="text/javascript" src="game/js/jquery.min.js"></script>
<script type="text/javascript" src="game/js/doge.js"></script>
```
**(in doge.js)**
```
$(document).on('keydown keyup', function (e) {
    if (e.type == 'keydown') {

        // up - jump
        if (e.keyCode == 87
            && !doge.hasClass('dogeJump')
            && !doge.hasClass('dogeLick')
        ) {
            jump();
        }

        // j - punch
        if (e.keyCode == 74
            && !doge.hasClass('dogeJump')
            && !doge.hasClass('dogeLick')
        ) {
            lick();
            
        }

        // walking
        if (e.keyCode == 65) { runLeft(); }
        if (e.keyCode == 68) { runRight(); }
    } else { // keyup
        doge.removeClass('dogeWalk flip');
    }
});

runLeft = () => {
    doge.addClass('dogeWalk flip').css({ marginLeft: '-=10px' });
};

runRight = () => {
    doge.addClass('dogeWalk').css({ marginLeft: '+=10px' });
};
```

Socket.io is used to establish and maintain a connection between two players, setting new players are JSON objects.
```
var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
    console.log('player connected');
    players[socket.id] = {
      x: 300,
      y: 300
    };
  });
});
```
