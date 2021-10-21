<?php
    session_start();

    if(isset($_SESSION['current_id'])){
        echo $_SESSION['current_id'];
    }
    /*else if(!isset($_SESSION['current_id'])){
        echo "로그인 후 접근 가능한 페이지 입니다."."<br>";
        echo "<br> <a href='index.html'> 메인으로 돌아가기 </a>";
        exit();
    }*/
?>