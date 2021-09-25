<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    //$userPick = $_POST["user_pick"];
    $reciveData = file_get_contents('php://input');
    $value = json_decode(stripcslashes($reciveData), true);
    $userPick = intval($value['user_pick']);

    //echo "선택한 것은 다음과 같습니다:  ".$userPick;

    switch ( $userPick ) {
        //event_1 장을 보러간다.
        case 'yesBasket':
          $sql = "UPDATE character_info
          SET air = air-3, health = health -1
          WHERE m_id='$userId';";
          break;
        case 'noBasket':
          $sql = "UPDATE character_info
          SET air = air+5, health = health -1
          WHERE m_id='$userId';";
          break;

        //event_2 카페를 간다.
        case 'yesTumbler':
            $sql = "UPDATE character_info
            SET soil = soil-2, health = health -1
            WHERE m_id='$userId';";
            break;
        case 'noTumbler':
            $sql = "UPDATE character_info
            SET soil = soil+4, health = health -1
            WHERE m_id='$userId';";
            break;

        //event_3 땀이 많이 났다.
        case 'Shampoowash':
            $sql = "UPDATE character_info
            SET water = water+5, health = health -1
            WHERE m_id='$userId';";
            break;
        case 'waterwash':
            $sql = "UPDATE character_info
            SET soil = soil+4, health = health -1
            WHERE m_id='$userId';";
            break;

        default:
          statement3;
    }

    //echo ("<script language=javascript> result($userPick);</script>");
?>


