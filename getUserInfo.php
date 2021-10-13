<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];
    // 해당 id의 정보 선택
    $sql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        
        $health = $row['health'];
        $day = $row['day'];
        $character = $row['ctype'];
        $event_day = $row['done_event'];

        $value = array('day' => $day,
                        'health' => $health,
                        'ctype' => $character,
                        'event_day' => $event_day); 

        echo json_encode($value); 
    }

    mysqli_close($con);

?>