<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);

    // 객체를 JSON문자열로 받아옴. 그것으로부터 데이터 추출!
    $culDay = intval($input['culDay']);
    $culStage = intval($input['culStage']);

    $envDay = intval($input['envDay']);
    $envStage = intval($input['envStage']);

    $homeDay = intval($input['homeDay']);
    $homeStage = intval($input['homeStage']);

    $sql = "";

    // 기존 데이터(이벤트 실행 전)를 가져와서 비교한다.
    $getSql = "select * from character_info where m_id='$userId'";
    $getRet = mysqli_query($con, $getSql);

    if($getRet){
        $row = mysqli_fetch_array($getRet);

        $oldculDay = $row['cultureDay'];
        $oldculStage = $row['cultureStage'];

        $oldenvDay = $row['envDay'];
        $oldenvStage = $row['envStage'];

        $oldhomeDay = $row['homeDay'];
        $oldhomeDay = $row['homeStage'];
        
        // 문화 엔딩 update
        if($oldculDay != $culDay){
            if($culDay > 0){
                $sql .="
                    UPDATE ending_info
                    SET cultureDay = $culDay 
                    WHERE m_id='$userId';";
            }
    
            if($culStage > 0){
                $sql .="
                    UPDATE ending_info
                    SET cultureStage = $culStage 
                    WHERE m_id='$userId';";
            }
        }

        // 환경지킴이 엔딩 update
        if($oldenvDay != $envDay){
            if($envDay > 0){
                $sql .="
                    UPDATE ending_info
                    SET envDay = $envDay 
                    WHERE m_id='$userId';";
            }
    
            if($envStage > 0){
                $sql .="
                    UPDATE ending_info
                    SET envStage = $envStage 
                    WHERE m_id='$userId';";
            }
        }

         
        // 가정 엔딩 update
        if($oldhomeDay != $homeDay){
            iif($homeDay > 0){
                $sql .="
                    UPDATE ending_info
                    SET homeDay = $homeDay 
                    WHERE m_id='$userId';";
            }
    
            if($homeStage > 0){
                $sql .="
                    UPDATE ending_info
                    SET homeStage = $homeStage 
                    WHERE m_id='$userId';";
            }
        }
    }

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