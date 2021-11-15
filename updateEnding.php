<?php
    // 이벤트 결과에 따른 아이템 상태 변경
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    
    $type = $input['id'];
    
    switch ($type) {
        case 'culture':
            $sql ="
                UPDATE ending_info
                SET culture_end_count = culture_end_count +1 
                WHERE m_id='$userId' AND cname = '$userToon';";
            break;

        case 'school':
            $sql ="
                UPDATE ending_info
                SET school_end_count = school_end_count +1 
                WHERE m_id='$userId' AND cname = '$userToon';";
            break;

        case 'home':
            $sql ="
                UPDATE ending_info
                SET home_end_count = home_end_count +1
                WHERE m_id='$userId' AND cname = '$userToon';";
            break;
              
        default:
            break;
    }

    echo $sql;
    
    $ret = mysqli_query($con, $sql);
    mysqli_close($con);

?>