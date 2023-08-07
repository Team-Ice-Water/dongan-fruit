<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];
    // 해당 id의 정보 선택
    $sql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);

    $sql2 = "select * from character_state where m_id='$userId' AND cname = '$userToon';";
    $ret2 = mysqli_query($con, $sql2);

    if($ret && $ret2){
        $row = mysqli_fetch_array($ret);
        $state_row = mysqli_fetch_array($ret2);
        
        $health = $row['health'];
        $day = $row['day'];
        $character = $row['ctype'];
        $event_day = $state_row['done_event'];

        $value = array('day' => $day,
                        'health' => $health,
                        'ctype' => $character,
                        'event_day' => $event_day); 

        echo json_encode($value); 
    }

    mysqli_close($con);

?>