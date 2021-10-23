const clickSound = new Audio('../audio/click.wav');
clickSound.volume = 0.4;
/*
$('body').children('button, a, img, .user-info, .btn').mousedown(function(){
    clickSound.play();
}); */

$('a, img, .user-info').mousedown(function(){
    clickSound.play();
});

$('button, .btn').click(function(){
    clickSound.play();
});
