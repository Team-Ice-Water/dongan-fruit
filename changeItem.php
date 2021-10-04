<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    
    $item = intval($input['item']);
    $type = intval($input['type']);
    
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