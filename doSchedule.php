<?php
    // 스케쥴, 하루 시작 브리핑 페이지에서 변하는 오염도와 체력을 업데이트함

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    // { id: "bible", water: -2, air: -2, soil: -2, health: -1 }
    $health = intval($input['health']);
    $water = intval($input['water']);
    $soil = intval($input['soil']);
    $air = intval($input['air']);


    $getSql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $getRet = mysqli_query($con, $getSql);

    if($getRet){
        $row = mysqli_fetch_array($getRet);

        $oldHealth = $row['health'];
        $oldWater = $row['water'];
        $oldSoil = $row['soil'];
        $oldAir = $row['air'];
        
        // 체력 update
        if($health){
            if(100 <= ($oldHealth + $health)){   // 100을 초과할 수 없음
                $sql ="
                UPDATE character_info
                SET health = 100 
                WHERE m_id='$userId' AND cname = '$userToon';";
            } else{
                $sql = "
                UPDATE character_info
                SET health= health +($health) 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
        }

        // 수질 오염도 update
        if($water){
            if(100 <= ($oldWater + $water)){
                $sql .= "
                UPDATE character_info
                SET water=100 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else if(($oldWater + $water) <= 0){
                $sql .= "
                UPDATE character_info
                SET water = 0 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else{
                $sql .= "
                UPDATE character_info
                SET water=water+($water) 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
        }

        // 토양 오염도 update
        if($soil){
            if(100 <= ($oldSoil + $soil)){
                $sql .= "
                UPDATE character_info
                SET soil=100 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else if(($oldSoil + $soil) <= 0){
                $sql .= "
                UPDATE character_info
                SET soil = 0 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else{
                $sql .= "
                UPDATE character_info
                SET soil=soil+($soil) 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
        }

        // 대기 오염도 update
        if($air){
            if(100 <= ($oldAir + $air)){   // 100을 초과할 수 없음
                $sql .= "
                UPDATE character_info
                SET air=100
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else if(($oldAir + $air) <= 0){
                $sql .= "
                UPDATE character_info
                SET air = 0 
                WHERE m_id='$userId' AND cname = '$userToon';";
            }
            else{
                $sql .= "
                UPDATE character_info
                SET air=air+($air)
                WHERE m_id='$userId' AND cname = '$userToon';";
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
    }    
    
    mysqli_close($con);
?>