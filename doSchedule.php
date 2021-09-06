<?php
    $reciveData = file_get_contents('php://input');
    $input = json_decode(stripcslashes($reciveData), true);
    echo "받아온 정보는 ".$input['id']." 그리고 ".$input['health'];
?>