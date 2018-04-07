var knuckles = $('.knuckles');
var guile = $('.guile');

// isColision loop
// ----------------------------------- \
setInterval( () => {
    knucklesPos = knuckles.offset();
    guilePos = guile.offset();
}, 250);

isColision = () => { 
    return (guilePos.left - knucklesPos.left <= 75 && guilePos.left - knucklesPos.left >= -75) ? true : false;
};


/*
    Movement and Combat actions
*/
moveLeft = () => {
    knuckles.css({ marginLeft: '-=10px' });
};

moveRight = () => {
    knuckles.css({ marginLeft: '+=10px' });
};

jump = () => {
    knuckles.addClass('knucklesJump');
    setTimeout( () => { knuckles.addClass('down'); }, 500);
    setTimeout( () => { knuckles.removeClass('knucklesJump down'); }, 1000);
};

punch = () => {
    knuckles.addClass('knucklesPunch');
    soundManager.play('huh1');
    if (isColision()) { 
        soundManager.play('hit1');
        guile.addClass('hit1');
        setTimeout( () => { guile.removeClass('hit1'); }, 500);
    }
    setTimeout( () => { knuckles.removeClass('knucklesPunch'); }, 150);
};


/*
    Movement and Combat keys
*/
$(document).on('keydown keyup', function (e) {
    if (e.type == 'keydown') {

        // up - jump
        if (e.keyCode == 87
            && !knuckles.hasClass('knucklesJump')
        ) {
            jump();
        }

        // j - punch
        if (e.keyCode == 74
            && !knuckles.hasClass('knucklesJump')
            && !knuckles.hasClass('knucklesPunch')
        ) {
            punch();
        }

        // ←← →→ walking
        if (e.keyCode == 65) { moveLeft(); }
        if (e.keyCode == 68) { moveRight(); }
    }


    //return false;
});
