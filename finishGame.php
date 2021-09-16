<?php
    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];

    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);

    // 객체를 JSON문자열로 받아옴. 그것으로부터 데이터 추출
    $tumbler = intval($input['tumbler']);
    $flowerpot = intval($input['flowerpot']);
    $mic = intval($input['mic']);
    $basket = intval($input['basket']);
    $book = intval($input['book']);
    $vitamin = intval($input['vitamin']);
    $bicycle = intval($input['bicycle']);
    $bible = intval($input['bible']);
    $soap = intval($input['soap']);
    $soapnut = intval($input['soapnut']);
    $ginseng = intval($input['ginseng']);

    $sql ="
    UPDATE character_info
    SET tumbler = $tumbler, flowerpot = $flowerpot, mic = $mic, basket = $basket,
    book = $book, vitamin = $vitamin, bicycle = $bicycle, bible = $bible, soap = $soap, soapnut = $soapnut, ginseng = $ginseng
    WHERE m_id='$userId';";

    $ret = mysqli_query($con, $sql);
    
    mysqli_close($con);
?>