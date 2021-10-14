$('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');

if($('title').text() == "만든 사람들"){
    $('body').prepend(`
    <nav class="nav justify-end navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-grid gap-4 d-md-flex justify-content-md-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="메인화면으로" href="start.html">
                        <span class="material-icons fs-2">home</span>
                        </a>
                    </li>
                    <!--
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="로그인 하기" href="login.html">
                            <span class="material-icons fs-2">login</span>
                        </a>
                    </li>
                    -->
                    <li class="nav-item fullscreen">              <!--전체화면-->
                        <a class="nav-link" href="#" onclick="notFullnow();">
                            <span class="material-icons fs-2">fullscreen</span>
                        </a>   
                    </li>
                </ul>
            </div>
        </div>
    </nav>`);
} else{
    $('body').prepend(`
    <nav class="nav justify-end navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-grid gap-4 d-md-flex justify-content-md-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="메인화면으로" href="start.html">
                        <span class="material-icons fs-2">home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="다른 캐릭터로 바꾸기" href="choice_toon.html">
                            <span class="material-icons fs-2">autorenew</span>
                        </a>
                    </li>
                    <li class="nav-item fullscreen">              <!--전체화면-->
                        <a class="nav-link" href="#" onclick="notFullnow();">
                            <span class="material-icons fs-2">fullscreen</span>
                        </a>   
                    </li>      
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="로그아웃" onclick="logout()">
                            <span class="material-icons fs-2">logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`);
}

function toggleFullScreen() {
    /*
    if (!document.fullscreenElement) {
        localStorage.setItem("fullScreenMode", "on");
        document.documentElement.requestFullscreen();
        //$(document.documentElement).fullScreen(true);
        $('.fullscreen').html('<span class="material-icons fs-2">fullscreen_exit</span>');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            //$(document.documentElement).fullScreen(false);
            $('.fullscreen').html('<span class="material-icons fs-2">fullscreen</span>');
        }
    }
    */
}

function notFullnow() {
    alert("F11 키를 눌러 전체화면으로 전환해주세요.");
}

function Fullnow() {
    alert("전체화면을 종료하려면 F11 키를 눌러주세요.");
}

function logout() {
    let check = confirm("로그아웃 하시겠습니까?");
    if(check){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../logout.php');
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log(xhr.responseText);
                location.href = "index.html";
            }
        };
    }
}

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();   
});

var press_count = 0;

$(window).keydown(function(e){
    if(e.which == "122"){
        press_count++;
        if(press_count % 2 == 0){   // 짝수번 누름
            $('.fullscreen').html(`
                <a class="nav-link fullscreen" href="#" onclick="notFullnow(); }">
                    <span class="material-icons fs-2">fullscreen</span>
                </a>`);
        } else{
            $('.fullscreen').html(`
                <a class="nav-link fullscreen" href="#" onclick="Fullnow();">
                    <span class="material-icons fs-2">fullscreen_exit</span>
                </a>`);
        };
    }
    
});