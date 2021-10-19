<?php
    // 스케쥴 브리핑 이후, 다음날 시작 전에 엔딩여부 체크 후, 엔딩페이지로 이동

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $getSql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $getRet = mysqli_query($con, $getSql);

    if($getRet){
        $row = mysqli_fetch_array($getRet);

        $health = $row['health'];
        $water = $row['water'];
        $soil = $row['soil'];
        $air = $row['air'];

        $arr = array('water' => $water, 'soil' => $soil, 'air' => $air);
        $max_int = max($arr); #배열중 가장 큰 값 추출 
        $max_int_key = array_search($max_int, $arr); #값이 가리키는 키값 추출

        if(($health) <= 0){
            echo 'health_ending';
        } else if(220 < $water+ $soil+ $air){
            echo 'earth_ending';
        } else if(80 < $max_int){
            switch ($max_int_key) {
                case 'water':
                    echo 'water_ending';
                    break;
                case 'soil':
                    echo 'soil_ending';
                    break;
                case 'air':
                    echo 'air_ending';
                    break;                
                default:
                    break;
            }
        }

    }    
    
    mysqli_close($con);
?>