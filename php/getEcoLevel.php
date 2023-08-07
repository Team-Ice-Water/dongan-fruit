<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];
    // 아이디가 member 있는지 확인
    $sql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        
        $air = $row['air'];
        $soil = $row['soil'];
        $water = $row['water'];

        $value = array('air'=> $air,
                        'soil'=> $soil,
                        'water'=> $water); 

        echo json_encode($value); 
    }

    mysqli_close($con);

?>