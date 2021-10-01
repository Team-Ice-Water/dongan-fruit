<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    //$userPick = $_POST["user_pick"];
    $reciveData = file_get_contents('php://input');
    $value = json_decode(stripcslashes($reciveData), true);
    $userPick = intval($value['user_pick']);

    //echo "선택한 것은 다음과 같습니다:  ".$userPick;
    $day_sql = "select day from character_info where m_id='$userId'";
    $day_ret = mysqli_query($con, $day_sql);

    if($day_ret){
        $row = mysqli_fetch_array($day_ret);
        $today = $row['day'];
    }

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
        case 'soapwash':
            $sql = "UPDATE character_info
            SET water = water-2
            WHERE m_id='$userId';";
            break;
        case 'waterwash':
            $sql = "UPDATE character_info
            SET soil = soil+4, health = health -1
            WHERE m_id='$userId';";
            break;

        // event_4 분리수거
        case 'yesBook':
            $sql = "UPDATE character_info
            SET soil = soil-5, water = water-5, air = air-5, health = health -2
            WHERE m_id='$userId';";
            break;
        case 'noBook':
            $sql = "UPDATE character_info
            SET soil = soil+5, water = water+5, air = air+5
            WHERE m_id='$userId';";
            break;

        // event_5 건강보조제
        case 'yesGinseng':
            $sql = "UPDATE character_info
            SET soil = soil+5, water = water+5, air = air+5, health = health +10
            WHERE m_id='$userId';";
            break;
        case 'yesVitamin':
            $sql = "UPDATE character_info
            SET health = health +3
            WHERE m_id='$userId';";
            break;
        case 'noGinsengNoVitamin':
            $sql = "UPDATE character_info
            SET health = health-2
            WHERE m_id='$userId';";
            break;

        // event_6 설거지
        case 'yesSoapnut':
            $sql = "UPDATE character_info
            SET water = water-3
            WHERE m_id='$userId';";
            break;
        case 'noSoapnut':
            $sql = "UPDATE character_info
            SET water = water+5
            WHERE m_id='$userId';";
            break;

        // event_7 집 근처 이동
        case 'yesBicycle':
            $sql = "UPDATE character_info
            SET air = air-3
            WHERE m_id='$userId';";
            break;
        case 'noBicycle':
            $sql = "UPDATE character_info
            SET air = air+5
            WHERE m_id='$userId';";
            break;

        // event_8 환경단체
        case 'yesBible':
        case 'noBible':
        // event_9 친구의 방문
        case 'yesChildren':
        // event_10 심방
        case 'yesTeacher':
        // event_11 전도대
        case 'yesChurch':
        // event_12 판매원
        case 'noBuyBible':
        case 'yesBuyBible':
        // event_13 이웃집
        case 'yesGiveSoap':
        case 'noGiveSoap':
        // event_14 환경운동가
        case 'pollution_below130':
        case 'pollution_above130':
            break;

        // event_15 식목일
        case 'yesFlowerpot':
            $sql = "UPDATE character_info
            SET air = air-3, health = health-5
            WHERE m_id='$userId';";
            break;

        case 'noFlowerpot':
        // event_16 대청소
        case 'above_6_item':
        case 'below_6_item':
        // event_18 친구들 초대
        case 'bothBicycleBasket':
            break;

        case 'eitherBicycleBasket':
            $sql = "UPDATE character_info
            SET soil = soil+5, water = water+5, air = air+5
            WHERE m_id='$userId';";
            break;
        case 'neitherBicycleBasket':
            $sql = "UPDATE character_info
            SET soil = soil+7, water = water+7, air = air+7
            WHERE m_id='$userId';";
            break;

        //event_19 자발적
        case 'eitherBibleBook':
        case 'bothBibleBook':
        case 'neitherBibleBook':
            break;

        // event_20, 21, 22 자연착취
        case 'yes_nature_1':
            $sql = "UPDATE character_info
            SET air = air+10, health = health+5
            WHERE m_id='$userId';";
            break;
        case 'yes_nature_2':
            $sql = "UPDATE character_info
            SET water = water+10, health = health+5
            WHERE m_id='$userId';";
            break;
        case 'yes_nature_3':
            $sql = "UPDATE character_info
            SET soil = soil+10, health = health+5
            WHERE m_id='$userId';";
            break;            
        case 'no_nature_1': 
        case 'no_nature_2':
        case 'no_nature_3': 
            break; 

        // event_23 문화 1단계
        case 'yes_culture_1':
            $sql = "UPDATE ending_info
            SET cultureDay = $today, cultureStage = 1;
            WHERE m_id='$userId';";
            break;
        case 'no_culture_1':
            break; 

        // event_24 문화 2단계
        case 'yes_culture_2_bible':
            $sql = "UPDATE character_info
            SET soil = soil-2, water = water-2, air = air-2, health = health -1
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 2;
            WHERE m_id='$userId';";
            break;

        case 'no_culture_2_bible':
            $sql = "UPDATE character_info
            SET soil = soil+2, water = water=2, air = air+2, health = health -1
            WHERE m_id='$userId';"
            break;

        // event_25 문화 2단계
        case 'yes_culture_2_mic':
            $sql = "UPDATE character_info
            SET soil = soil-2, water = water-2, air = air-2, health = health -1
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 2;
            WHERE m_id='$userId';";
            break;

        case 'no_culture_2_mic':
            $sql = "UPDATE character_info
            SET soil = soil+2, water = water=2, air = air+2, health = health -1
            WHERE m_id='$userId';"
            break;

        // event_26 문화 3단계
        case 'yes_culture_3_book':
            $sql = "UPDATE character_info
            SET soil = soil-2, water = water-2, air = air-2, health = health -1
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 3;
            WHERE m_id='$userId';";
            break;
        case 'no_culture_3_book':
            break;

        // event_27 문화 3단계
        case 'yes_culture_3_tumbler':
            $sql = "UPDATE character_info
            SET soil = soil-3
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 3;
            WHERE m_id='$userId';"
            break;
        case 'no_culture_3_tumbler':
            $sql = "UPDATE character_info
            SET soil = soil+2
            WHERE m_id='$userId';"
            break;

        // event_28 문화 3단계
        case 'yes_culture_3_tumbler':
            $sql = "UPDATE character_info
            SET air = air-3
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 3;
            WHERE m_id='$userId';"
            break;
        case 'no_culture_3_tumbler':
            $sql = "UPDATE character_info
            SET air = air+2
            WHERE m_id='$userId';"
            break;

        // event_29 문화 4단계
        case 'yes_culture_4':
            $sql = "UPDATE character_info
            SET soil = soil-10, water = water-10, air = air-10, health = health -5
            WHERE m_id='$userId';
            UPDATE ending_info
            SET cultureDay = $today, cultureStage = 4;
            WHERE m_id='$userId';"
            break;
        case 'no_culture_4':
            $sql = "UPDATE character_info
            SET soil = soil+3, water = water+3, air = air+3
            WHERE m_id='$userId';"
            break;

        // event_30, 31, 32 환경 1단계
        case 'yes_env_1_children':
        case 'yes_env_1_teacher':
        case 'yes_env_1_library':
            $sql = "UPDATE ending_info
            SET envDay = $today, envStage = 1;
            WHERE m_id='$userId';"
            break;
        case 'no_env_1_children':
        case 'no_env_1_teacher':
        case 'no_env_1_library':
            break;

        // event_33, 34 환경 2단계
        case 'env_2_tumbler':
        case 'env_2_bicycle':
        case 'env_2_soap':
        case 'env_2_2_soapnut':
        case 'env_2_2_soap':
        case 'env_2_2_basket':
            $sql = "UPDATE character_info
            SET soil = soil-2, water = water-2, air = air-2
            WHERE m_id='$userId';
            UPDATE ending_info
            SET envDay = $today, envStage = 2;
            WHERE m_id='$userId';"
            break;
        case 'env_2_nothing':
        case 'env_2_2_nothing':
            $sql = "UPDATE character_info
            SET soil = soil+2, water = water+2, air = air+2
            WHERE m_id='$userId';"
            break;

        // event_35 청지기 1단계
        case 'keeper_1_bible':
        case 'keeper_1_book':
            $sql = "UPDATE ending_info
            SET homeDay = $today, homeStage = 1;
            WHERE m_id='$userId';"
            break;        
        case 'keeper_1_nothing':
            break;

        // event_36 청지기 2단계
        case 'keeper_2_yesTalk':
            $sql = "UPDATE character_info
            SET soil = soil-2, water = water-2, air = air-2
            WHERE m_id='$userId';
            UPDATE ending_info
            SET homeDay = $today, homeStage = 2;
            WHERE m_id='$userId';"
            break;
        case 'keeper_2_noTalk':
            break;

        // event_37 청지기 3단계
        case 'keeper_3_yesSoapnut':
            $sql = "UPDATE character_info
            SET water = water-5
            WHERE m_id='$userId';
            UPDATE ending_info
            SET homeDay = $today, homeStage = 3;
            WHERE m_id='$userId';"
            break;
        case 'keeper_3_noSoapnut':
            $sql = "UPDATE character_info
            SET water = water+3
            WHERE m_id='$userId';"
            break;

        // event_38 청지기 4단계
        case 'keeper_4_bicycle':
        case 'keeper_4_tumbler':
        case 'keeper_4_envbook':
            $sql = "UPDATE character_info
            SET soil = soil-5, water = water-5, air = air-5
            WHERE m_id='$userId';
            UPDATE ending_info
            SET homeDay = $today, homeStage = 4;
            WHERE m_id='$userId';";
            break;
        case 'keeper_4_nothing':
            break;

        default:
          break;
    }

    
    $ret = mysqli_query($con, $sql);
?>


