<?php
    session_start();

    if(isset($_SESSION['current_id'])){
        echo "현재 로그인된 사용자 id는".$_SESSION['current_id']."입니다.";
        ?>
    <?php
    }
    else if(!isset($_SESSION['current_id'])){
        echo "로그인 후 접근 가능한 페이지 입니다."."<br>";
        echo "<br> <a href='index.html'> 메인으로 돌아가기 </a>";
        exit();
    }
?>