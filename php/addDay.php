<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];
    $updatesql = "
        UPDATE character_info
        SET day = day+1 
        WHERE m_id='$userId' AND cname = '$userToon';";
    $updateret = mysqli_query($con, $updatesql);

    $sql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        $day = $row['day'];

        echo json_encode($day); 
    }

    mysqli_close($con);

?>