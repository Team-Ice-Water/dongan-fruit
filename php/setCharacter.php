<?php
    // 캐릭터 선택 페이지에서 선택한 캐릭터를 세션변수에 저장
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);

    // 캐릭터 이름 저장하는 세선 변수 생성
    $_SESSION['current_toon']= $input['name'];

    echo $input['name'];
    
    mysqli_close($con);
?>

