var doge = $('.doge');
var guile = $('.guile');

// isColision loop
// ----------------------------------- \
setInterval( () => {
    dogePos = doge.offset();
    guilePos = guile.offset();
}, 250);

isColision = () => { 
    return (guilePos.left - dogePos.left <= 40 && guilePos.left - dogePos.left >= -40 ) ? true : false;
};


/*
    Movement and Combat actions
*/
runLeft = () => {
    doge.addClass('dogeWalk flip').css({ marginLeft: '-=10px' });
};

runRight = () => {
    doge.addClass('dogeWalk').css({ marginLeft: '+=10px' });
};

lick = () => {
    doge.addClass('dogeLick');
    if (isColision()) { 
        soundManager.play('hit1');
        guile.addClass('hit1');
        setTimeout( () => { guile.removeClass('hit1'); }, 500);
    }
    setTimeout( () => { doge.removeClass('dogeLick'); }, 550);
}

jump = () => {
    doge.addClass('dogeJump');
    setTimeout( () => { doge.addClass('down'); }, 500);
    setTimeout( () => { doge.removeClass('dogeJump down'); }, 1000);
}

/*
    Movement and Combat keys
*/

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