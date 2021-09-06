<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    $health = $input['health'];
    $water = $input['water'];
    $soil = $input['soil'];
    $air = $input['air'];
    
    // 체력 update
    $sql = "
    UPDATE character_info
    SET health = '$health'
    WHERE m_id='$userId'";

    // 수질 오염도 update
    $sql .= "
    UPDATE character_info
    SET water = '$water' 
    WHERE m_id='$userId'";

    $sql .= "
    UPDATE character_info
    SET soil = '$soil' 
    WHERE m_id='$userId'";
    $sql .= "
    UPDATE character_info
    SET air = '$air' 
    WHERE m_id='$userId'";

    mysqli_multi_query($con, $sql);
    $result = mysqli_store_result($con)
    
    echo

    mysqli_close($con);
?>