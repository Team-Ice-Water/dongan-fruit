const endingInfo = {
    // 문화를 바꿔가는 그리스도인 엔딩
    culDay: 0,
    culStage: 0,
    // 우리 학교는 환경지킴이 엔딩
    envDay: 0,
    envStage: 0,
    // 청지기 가정 엔딩
    homeDay: 0,
    homeStage: 0
}

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
        
        $envDay = $row['envDay'];
        $envStage = $row['envStage'];

        $homeDay = $row['homeDay'];
        $homeStage = $row['homeStage'];

        $value = array('culDay' => $culDay,
                        'culStage' => $culStage,
                        'envDay' => $envDay,
                        'envStage' => $envStage,
                        'homeDay' => $homeDay,
                        'homeStage' => $homeStage); 

        echo json_encode($value); 
    }

    mysqli_close($con);

?>