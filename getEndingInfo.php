<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    // 해당 id의 정보 선택
    $sql = "select * from ending_info where m_id='$userId'";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        
        $culDay = $row['culture_day'];
        $culStage = $row['culture_stage'];
        $culEnd = $row['culture_end_count'];
        
        $envDay = $row['school_day'];
        $envStage = $row['school_stage'];
        $envEnd = $row['school_end_count'];

        $homeDay = $row['home_day'];
        $homeStage = $row['home_stage'];
        $homeEnd = $row['home_end_count'];

        $value = array('culDay' => $culDay,
                        'culStage' => $culStage,
                        'culEnd' => $culEnd,
                        'envDay' => $envDay,
                        'envStage' => $envStage,
                        'envEnd' => $envEnd,
                        'homeDay' => $homeDay,
                        'homeStage' => $homeStage,
                        'homeEnd' => $homeEnd); 

        echo json_encode($value); 
    }

    mysqli_close($con);

?>