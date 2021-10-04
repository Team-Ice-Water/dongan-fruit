<?php
    // 이벤트 결과에 따른 아이템 상태 변경
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    
    $item = $input['item'];
    $type = $input['type'];
    
    switch ($type) {
        case 'add':
            $sql ="
                UPDATE character_info
                SET $item = 1 
                WHERE m_id='$userId';";
            break;

        case 'remove':
            $sql ="
                UPDATE character_info
                SET $item = 0 
                WHERE m_id='$userId';";
            break;

        case 'damage':
            $sql ="
                UPDATE character_info
                SET $item = 2
                WHERE m_id='$userId';";
        
        default:
            break;
    }
    
    $ret = mysqli_query($con, $sql);
    mysqli_close($con);

?>