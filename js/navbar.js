$('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');

var ID;
function loginChcek() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../checkLogin.php');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            ID = xhr.responseText;
            setNavBar();
        }
    };
}
loginChcek();

function setNavBar() {
    switch ($('title').text()) {
        case "만든 사람들":
            $('body').prepend(`
            <nav class="nav justify-end navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse d-grid gap-4 d-md-flex justify-content-md-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="시작화면으로" href="index.html">
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
            break;
    
        case "회원가입":
        case "로그인":
            $('body').prepend(`
            <nav class="navbar justify-end navbar-expand-lg navbar-light px-3" style="background-color: #85d6ff; width: 100%;">
                <div class="container-fluid">
                    <a class="navbar-brand d-md-flex justify-content-md-start" href="#">
                        <img src="/img/슬청생.png" alt="logo" width="30%" class="d-inline-block align-text-top">
                    </a>
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="시작화면으로" href="index.html">
                                <span class="material-icons fs-2">home</span>
                                </a>
                            </li>
                            <li class="nav-item fullscreen">              <!--전체화면-->
                                <a class="nav-link" href="#" onclick="notFullnow();">
                                    <span class="material-icons fs-2">fullscreen</span>
                                </a>   
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>`);
            break;

        case "캐릭터 선택":
        case "엔딩 모음":
            $('body').prepend(`
            <nav class="nav justify-end navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse d-grid gap-4 d-md-flex justify-content-md-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item fs-5 id-txt">
                                `+ID+`
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="메인으로" href="start.html">
                                <span class="material-icons fs-2">home</span>
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
            break;

        case "슬기로운 청지기 생활":
            $('body').prepend(`
            <nav class="nav justify-end navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item fs-5 id-txt">
                                `+ID+`
                            </li>
                            <li class="nav-item" id="play">
                                <a class="nav-link" href="#" onclick="mutebgm();">
                                    <span class="material-icons fs-2">volume_up</span>
                                </a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="메인으로" href="start.html">
                                <span class="material-icons fs-2">home</span>
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
            break;

        case "브리핑":
        case "아침 브리핑":
            $('body').prepend(`
            <nav class="nav justify-end navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse d-grid gap-4 d-md-flex justify-content-md-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item id-txt">
                                `+ID+`
                            </li>
                            <li class="nav-item" id="play">
                                <a class="nav-link" href="#" onclick="mutebgm();">
                                    <span class="material-icons fs-2">volume_up</span>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>`);
            break;

        default:
            $('body').prepend(`
            <nav class="nav justify-end navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item fs-5 id-txt">
                                `+ID+`
                            </li>
                            <li class="nav-item" id="play">
                                <a class="nav-link" href="#" onclick="mutebgm();">
                                    <span class="material-icons fs-2">volume_up</span>
                                </a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="메인화면으로" href="start.html">
                                <span class="material-icons fs-2">home</span>
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
            break;
    }
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
                location.replace("index.html");
            }
        };
    }
}

/* 각 페이지별로 js에 있음
function mutebgm() {
    $('#play').html(`<a class="nav-link" href="#" onclick="playbgm();">
    <span class="material-icons fs-2">volume_off</span>
    </a>`);
    console.log("mute됨");
}

function playbgm() {
    $('#play').html(`<a class="nav-link" href="#" onclick="mutebgm();">
    <span class="material-icons fs-2">volume_up</span>
    </a>`);
    console.log("재생됨");
}
*/
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