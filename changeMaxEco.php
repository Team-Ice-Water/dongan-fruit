<?php
    // 이벤트 결과에 대한 처리
    // 최대 오염도를 찾아서 수정해야 하는 경우 이 파일을 통해 DB수정
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    
    $type = $input['eco'];
    $value = intval($input['value']);
    
    $sql ="
        UPDATE character_info
        SET $type = $type + $value
        WHERE m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);
    
    mysqli_close($con);

?>