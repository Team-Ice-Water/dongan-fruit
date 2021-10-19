<?php
    // 엔딩 화면이 뜨고 해당 캐릭터를 더이상 사용할 수 없게 엔딩 처리
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $sql = "
        UPDATE character_info
        SET is_end = '1' 
        WHERE m_id = '$userId' AND cname = '$userToon';
    ";
    $ret = mysqli_query($con, $sql);

    mysqli_close($con);

?>