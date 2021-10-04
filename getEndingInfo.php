<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    // 해당 id의 정보 선택
    $sql = "select * from ending_info where m_id='$userId'";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        
        $culDay = $row['cultureDay'];
        $culStage = $row['cultureStage'];
        $culEnd = $row['cultureEnd'];
        
        $envDay = $row['envDay'];
        $envStage = $row['envStage'];
        $envEnd = $row['envEnd'];

        $homeDay = $row['homeDay'];
        $homeStage = $row['homeStage'];
        $homeEnd = $row['homeEnd'];

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