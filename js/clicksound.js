const clickSound = new Audio('../audio/click.wav');
clickSound.volume = 0.4;

$('body').children().mousedown(function(){
    clickSound.play();
});