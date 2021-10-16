<?php
    // 엔딩 화면이 뜨고 해당 캐릭터를 더이상 사용할 수 없게 엔딩 처리
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    $what_ending = $input['type'];
    
    $sql = "
        UPDATE character_state
        SET is_end = '1' 
        WHERE m_id = '$userId' AND cname = '$userToon';
    ";
    $ret = mysqli_query($con, $sql);

    $sql2 = "
        UPDATE character_state
        SET ending_type = '$what_ending'
        WHERE m_id='$userId' AND cname = '$userToon';
    ";
    $ret2 = mysqli_query($con, $sql2);

    echo $sql2;

    mysqli_close($con);

?>