<?php
    // 엔딩 모음 페이지에서 사용

    include 'connect.php';
    session_start();
    
    $userId = $_SESSION['current_id'];
    // 해당 id의 캐릭터 중, 엔딩이 된 것 선택
    $sql = "
        SELECT * 
        FROM character_state
        WHERE m_id='$userId' AND is_end = 1;
    ";
    $result = mysqli_query($con, $sql);

    class Character {
        public $name;
        public $type;

        public function __construct($name, $type) {  // 생성자도 무조건 정의해줘야 함
            $this->name = $name;
            $this->type = $type;
        }            
    }

    $num = 0;
    $array = array();
    if($result){
        while ($row = mysqli_fetch_array($result)) {    // assoc 는 안됨.. 
            $array[$num] = new Character($row['cname'], $row['ending_type']]);
            $num++;
        }
    }
    echo json_encode($array); 

    mysqli_close($con);

?>