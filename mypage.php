<?php
    header('Content-Type: text/html; charset=utf-8');
    session_start();
    $con = mysqli_connect("localhost", "icewater", "ice0814!", "icewater") or die("MySQL 접속 실패");
    
    $userId = $_SESSION['current_id']; //o_id
    // 아이디가 member 있는지 확인
    $sql = "select * from character_info where m_id='$userId'";
    $ret = mysqli_query($con, $sql);

    if($ret){
        $row = mysqli_fetch_array($ret);
        echo "ID: ".$row['m_id'];
        echo "<br>캐릭터 타입: ".$row['ctype'];
        echo "<br>캐릭터 이름: ".$row['cname'];
        echo "<br>체력: ".$row['health'];
        echo "<br>수질 오염도: ".$row['water'];
        echo "<br>토양 오염도: ".$row['soil'];
        echo "<br>대기 오염도: ".$row['air'];
        echo "<br>Day-".$row['day'];
        echo "<br>-----아이템-----";
        echo "<br>텀블러: ".$row['tumbler'];

    }
    else{
        echo "데이터 조회 실패"."<br>";
        echo "실패 원인: ".mysqli_error($con);
        echo "<br> <a href='main.php'> 메인화면으로 돌아가기 </a>";
        exit();
    }
    
?>