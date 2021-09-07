<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    $health = intval($input['health']);
    $water = intval($input['water']);
    $soil = intval($input['soil']);
    $air = intval($input['air']);
    
    // 체력 update
    if($health){
        $sql = "
        UPDATE character_info
        SET health= health +($health) 
        WHERE m_id='$userId';";
    };

    if($water){
        // 수질 오염도 update
        $sql .= "
        UPDATE character_info
        SET water=water+($water) 
        WHERE m_id='$userId';";
    };
    
    if($soil){
        // 토양 오염도 update
        $sql .= "
        UPDATE character_info
        SET soil=soil+($soil) 
        WHERE m_id='$userId';";
    };

    if($air){
        // 대기 오염도 update
        $sql .= "
        UPDATE character_info
        SET air=air+($air)
        WHERE m_id='$userId';";
    };
    

    if (mysqli_multi_query($con, $sql)) {
        do {
              // store first result set
              if ($result = mysqli_store_result($con)) {    
                    // fetch one and one row
                    while ($row = mysqli_fetch_row($result)) {
                          echo $row[0];
                    }
                    // free result set
                    mysqli_free_result($result);
              }
        } while (mysqli_more_results($con) && mysqli_next_result($con));
    }
    
    mysqli_close($con);
?>