
soundManager.setup({
    url:'game/audio/soundmanager2.swf',
    debugMode:false
});

soundManager.onready(function() {
    
    var backgroundMusic = soundManager.createSound({
        id:'music',
        url:'game/audio/musics/theme.mp3'
    });
    backgroundMusic.play({ volume:70 });
    $('.pause').on('click', function(){
        var $this = $(this);
        if ($this.hasClass('play')) {
            $this.removeClass('play');
            backgroundMusic.resume();
        } else {
            $this.addClass('play');
            backgroundMusic.pause();
        }
    });

    // hado/shoryu ken
    // ------------------------------- /
    soundManager.createSound({
        id:'hado',
        url:'game/audio/hado-shoryu_ken/hado.wav'
    });
    soundManager.createSound({
        id:'shoryu',
        url:'game/audio/hado-shoryu_ken/shoryu.wav'
    });
    soundManager.createSound({
        id:'ken',
        url:'game/audio/hado-shoryu_ken/ken.wav'
    });

    // tatsumaki senpuu kyaku
    // ------------------------------- /
    soundManager.createSound({
        id:'tatsumaki',
        url:'game/audio/tatsumaki-senpuu-kyaku.wav'
    });

    // you win/loose
    // ------------------------------- /
    soundManager.createSound({
        id:'you',
        url:'game/audio/commentator/you.wav'
    });
    soundManager.createSound({
        id:'win',
        url:'game/audio/commentator/win.wav'
    });
    soundManager.createSound({
        id:'loose',
        url:'game/audio/commentator/loose.wav'
    });
    

    // huhs
    // ------------------------------- /
    soundManager.createSound({
        id:'huh1',
        url:'game/audio/huhs/huh1.wav'
    });
    soundManager.createSound({
        id:'huh2',
        url:'game/audio/huhs/huh2.wav'
    });
    soundManager.createSound({
        id:'huh3',
        url:'game/audio/huhs/huh3.wav'
    });

    // hits
    // ------------------------------- /
    soundManager.createSound({
        id:'hit1',
        url:'game/audio/hits/1.wav'
    });
    soundManager.createSound({
        id:'hit2',
        url:'game/audio/hits/2.wav'
    });
    soundManager.createSound({
        id:'hit3',
        url:'game/audio/hits/3.wav'
    });
    soundManager.createSound({
        id:'hit4',
        url:'game/audio/hits/4.wav'
    });
    soundManager.createSound({
        id:'hit5',
        url:'game/audio/hits/5.wav'
    });
    soundManager.createSound({
        id:'hit6',
        url:'game/audio/hits/6.wav'
    });
    soundManager.createSound({
        id:'hit7',
        url:'game/audio/hits/7.wav'
    });
    soundManager.createSound({
        id:'punch',
        url:'game/audio/hits/kung_fu_punch-Mike_Koenig-2097967259.mp3'
    });

    // swooshes
    // ------------------------------- /
    soundManager.createSound({
        id:'swooch1',
        url:'game/audio/swooshes/Swoosh 1-SoundBible.com-231145780.mp3'
    });
    soundManager.createSound({
        id:'swooch2',
        url:'game/audio/swooshes/Swoosh 3-SoundBible.com-1573211927.mp3'
    });
    soundManager.createSound({
        id:'swooch3',
        url:'game/audio/swooshes/Swooshing-SoundBible.com-1214884243.mp3'
    });
    

});

youWin = () => {
    soundManager.play('you', {
        multiShotEvents: true, 
        onfinish() {
            soundManager.play('win');
        }
    });
};
youLoose = () => {
    soundManager.play('you', {
        multiShotEvents: true, 
        onfinish() {
            soundManager.play('loose');
        }
    });
};
