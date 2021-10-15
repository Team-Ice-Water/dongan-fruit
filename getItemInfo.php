<?php

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    $userToon = $_SESSION['current_toon'];
    // 아이디가 member 있는지 확인
    $sql = "select * from character_info where m_id='$userId' AND cname = '$userToon';";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);

        $tumbler = $row['tumbler'];
        $flowerpot = $row['flowerpot'];
        $mic = $row['mic'];
        $basket = $row['basket'];
        $book = $row['book'];
        $vitamin = $row['vitamin'];
        $bicycle = $row['bicycle'];
        $bible = $row['bible'];
        $soap = $row['soap'];
        $soapnut = $row['soapnut'];
        $ginseng = $row['ginseng'];

        // event_choice.js 에서 사용할 오늘 날짜
        $today = $row['day'];

        $value = array('tumbler'=> $tumbler,
                        'flowerpot'=> $flowerpot,
                        'mic'=> $mic,
                        'basket'=> $basket,
                        'book'=> $book,
                        'vitamin'=> $vitamin,
                        'bicycle'=> $bicycle,
                        'bible'=> $bible,
                        'soap'=> $soap,
                        'soapnut'=> $soapnut,
                        'ginseng'=> $ginseng,
                        'today' => $today); 

        echo json_encode($value); 

    }

    mysqli_close($con);

?>